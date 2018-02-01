import { RouterModule , Routes} from '@angular/router'

import {HomepageComponent} from './homepage.component'
import {StudentsComponent} from './students.component'
import { ProfileComponent } from './profile.component';
import { ProfileGuard } from './profile.guard';
import { ErrorpageComponent } from './errorpage.component';

const MY_ROUTES : Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomepageComponent},
  {path:'students', component: StudentsComponent},
  {path:'profile/:id', component: ProfileComponent, canActivate:[ProfileGuard]},
  {path:'error', component: ErrorpageComponent}

];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
