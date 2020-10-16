import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLoggedIn:boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('userId')!==null){
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }
  }


  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }


}
