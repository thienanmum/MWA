import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }
  getData(userId:number) {
    return new Promise((resolve, reject) => {
      Promise.all([
        this.http.get("http://jsonplaceholder.typicode.com/users/"+ userId).toPromise(),
        this.http.get("http://jsonplaceholder.typicode.com/posts?userId="+ userId).toPromise()
      ])
      .then(responses => {
        console.log(responses);
        const user = responses[0];
        const post = responses[1];
        resolve({
          username: user['username'],
          email: user['email'],
          post: post[0].body
        });
      })
      .catch(err => reject(err));
    });
    
  }

}
