import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'

import { myRoutes } from './myroute'
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage.component';
import { StudentsComponent } from './students.component';
import { ProfileComponent } from './profile.component';
import { DbService } from './db.service'
import { ProfileGuard } from './profile.guard';
import { ErrorpageComponent } from './errorpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StudentsComponent,
    ProfileComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule, myRoutes
  ],
  providers: [DbService, ProfileGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
