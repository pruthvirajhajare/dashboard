import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
date=new Date()
name:string="Anna"
technology:number=25
ecology:number=44
realEstate:number=40
education:number=15
jobMarket:number=76
  constructor() { }

  ngOnInit() {
  }

}
