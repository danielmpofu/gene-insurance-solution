import {Component, OnInit} from '@angular/core';
import {NetworkService} from '../shared/services/network.service';
import {NgForm} from '@angular/forms';
import {AlertifyService} from '../shared/services/alertify.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private appService: NetworkService,
              private router:Router
              ,private  alertifyService: AlertifyService) {
  }

  ngOnInit(): void {
  }

  doLogin(f: NgForm) {
   this.appService.login(f.value).subscribe(
     resp=>{
       console.log(resp);
       this.alertifyService.successMessage('login success');
       this.router.navigate(['/home'])
     },error => {
       this.alertifyService.errorMessage('unable to login check your credentials');
     }
   );

  }



}
