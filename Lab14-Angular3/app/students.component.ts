import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';
import { Student } from './student';

@Component({
  selector: 'app-students',
  template: `
    <ul>
      <li *ngFor='let s of students'>
        <a [routerLink]='["/profile", s._id]' >{{s.name}}</a>
      </li>
    </ul>
  `,
  styles: []
})
export class StudentsComponent implements OnInit {
  students: Student[];
  constructor(private db: DbService) { }
  ngOnInit() {
    this.students = this.db.getData();
  }

}
