import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DbService } from './db.service';

@Injectable()
export class ProfileGuard implements CanActivate {
  constructor(private db: DbService, private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
    if (this.db.findStudentById(next.params.id)) {
      console.log("Guard: found profile.");
      return true;
    } else {
      console.log("Guard: not found profile.");
      this.router.navigate(['/error'])
        .then(x => this.db.pushError(`Profile with ID ${next.params.id} is not found.`));
      return false;
    }
  }
}
