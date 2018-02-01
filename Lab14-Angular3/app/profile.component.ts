import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from './student';

@Component({
  selector: 'app-profile',
  template: `
    <div>id: {{student.stuID}}</div>
    <div>name: {{student.name}}</div>
    <div>email: {{student.email}}</div>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {
  studentId:number
  student:Student
  constructor(private db: DbService, private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.studentId = parseInt(param['id']);
      this.student = this.db.findStudentById(this.studentId);
    })
  }

}
