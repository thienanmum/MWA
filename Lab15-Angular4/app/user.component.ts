import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { UserService } from './user.service';
import { ValidationErrors } from '@angular/forms/src/directives/validators';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [".error {color: red}"]
})
export class UserComponent implements OnInit {
  userForm: FormGroup
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'post': new FormControl('', this.postValidation)
    })
    this.userForm.statusChanges.subscribe((status)=>console.log(this.userForm))
  }
  onSubmit() {
    console.log(this.userForm);
    this.router.navigate(['thankyou']);

  }
  getData() {
    this.userService.getData(1).then(user => {
      console.log(user);
      this.userForm.setValue(user);
    });
  }
  postValidation(control: FormControl): ValidationErrors {
    if (control.value.length < 10) {
      return {invalidMin:true};
    }
    return null;
  }
}