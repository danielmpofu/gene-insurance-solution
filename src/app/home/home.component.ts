import {Component, OnInit} from '@angular/core';
import {NetworkService} from '../shared/services/network.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private networkService: NetworkService, private router: Router) {
  }

  ngOnInit(): void {

    console.log(localStorage.getItem('userId'));
    if (localStorage.getItem('userId') === null) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['dashboard']);
    }
  }


}
