import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { ThankyouComponent } from './thankyou.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, 
    RouterModule.forRoot([{path:'', component:UserComponent},{path:'thankyou', component:ThankyouComponent}])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
