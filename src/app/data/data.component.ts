import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {
  students: Student[] = [];

  newStudent: Student = {
    id: 0,
    name: '',
    surname: '',
    age: 0,
    averageGrade: 0
  };

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents() {
    this.http.get<Student[]>('http://localhost:8080/').subscribe(
      response => {
        this.students = response;
      },
      (error: HttpErrorResponse) => {
        if (error.status === 302) {
          this.router.navigate(['/login']);
        } else {
          console.error('Failed to retrieve students:', error);
        }
      }
    );
  }

  getStudent(id: number) {
    this.http.get<Student>(`http://localhost:8080/${id}`).subscribe(
      response => {
        console.log('Student:', response);
      },
      error => {
        console.error(`Failed to retrieve student with ID ${id}:`, error);
      }
    );
  }

  addStudent() {
    this.http.post('http://localhost:8080/', this.newStudent).subscribe(
      () => {
        this.getAllStudents();
        this.resetForm();
      },
      error => {
        console.error('Failed to add student:', error);
      }
    );
  }

  resetForm() {
    this.newStudent = {
      id: 0,
      name: '',
      surname: '',
      age: 0,
      averageGrade: 0.0
    };
  }

  deleteStudent(id: number) {
    this.http.delete(`http://localhost:8080/${id}`).subscribe(
      () => {
        this.getAllStudents();
      },
      error => {
        console.error(`Failed to delete student with ID ${id}:`, error);
      }
    );
  }

  protected readonly Math = Math;
}

interface Student {
  id: number;
  name: string;
  surname: string;
  age: number;
  averageGrade: number;
}
