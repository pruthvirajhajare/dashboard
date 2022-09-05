import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  date = new Date;
  constructor(private router:Router) { }

  ngOnInit() {
  }
// home(){
//   this.router.navigate(["home"])
// }
}
