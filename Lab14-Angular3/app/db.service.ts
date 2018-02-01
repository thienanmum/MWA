import { Injectable, EventEmitter } from '@angular/core';
import { Student } from './student';
import { EventListener } from '@angular/core/src/debug/debug_node';

@Injectable()
export class DbService {
  data : Student[] = [new Student(1, 'Nguyen Thien An', '986124','tanguyen@mum.edu'),
                      new Student(2, 'Tran Nu Quynh Nhu', '986121', 'nutran@mum.edu')];
  errorChanel: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  getData() {
    return this.data;
  }
  findStudentById(id:any): Student {
    return this.data.find(s => s._id == id);
  }
  pushError(error:string) {
    this.errorChanel.emit(error);
  }
}
