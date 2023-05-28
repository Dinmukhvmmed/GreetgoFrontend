import {Component, NgModule, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  //styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit{
  students: Student[] = [];

  newStudent: Student = {
    id: 0,
    name: '',
    surname: '',
    age: 0,
    averageGrade: 0
  };

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents() {
    this.http.get<Student[]>('/').subscribe(
      response => {
        this.students = response;
      },
      error => {
        console.error('Failed to retrieve students:', error);
      }
    );
  }

  getStudent(id: number) {
    this.http.get<Student>(`/${id}`).subscribe(
      response => {
        console.log('Student:', response);
      },
      error => {
        console.error(`Failed to retrieve student with ID ${id}:`, error);
      }
    );
  }


  addStudent() {
    this.http.post('/', this.newStudent).subscribe(
      () => {
        this.getAllStudents(); // Обновляем список студентов после добавления
        this.resetForm(); // Сбрасываем значения формы
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
      averageGrade: 0
    };
  }
  deleteStudent(id: number) {
    this.http.delete(`/${id}`).subscribe(
      () => {
        this.getAllStudents(); // Refresh the student list after deletion
      },
      error => {
        console.error(`Failed to delete student with ID ${id}:`, error);
      }
    );
  }
}

interface Student {
  id: number;
  name: string;
  surname: string;
  age: number;
  averageGrade: number;
}

