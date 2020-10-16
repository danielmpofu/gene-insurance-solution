import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  baseUrl: string = 'https://localhost:5001/';

  constructor(private  httpClient: HttpClient) {
  }



  login(user) {
    return this.httpClient.post(this.baseUrl + 'api/users/login', {'email': user.email, 'password': user.password})
      .pipe(map(response => {
          const user = response;
          if (user) {
            localStorage.setItem('userId', user['id']);
            localStorage.setItem('firstName', user['firstName']);
            localStorage.setItem('email', user['email']);
            localStorage.setItem('surname', user['surname']);
            localStorage.setItem('picurl', user['imageUrl']);
            localStorage.setItem('nationalId', user['nationalId']);
            return 'login success';
          } else {
            if (localStorage.getItem('userId') !== null) {
              localStorage.removeItem('userId');
            }
            return 'unable to login';
          }
        }
      ));
  }




}
