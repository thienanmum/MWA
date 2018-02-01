import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';

@Component({
  selector: 'app-errorpage',
  template: `
   <h1>{{error}}</h1>
  `,
  styles: []
})
export class ErrorpageComponent implements OnInit {
  error: string;
  constructor(private db: DbService) { 
    this.db.errorChanel.subscribe(error => this.error = error);
  }

  ngOnInit() {
  }

}
