import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-slidebar',
  templateUrl: './admin-slidebar.component.html',
  styleUrls: ['./admin-slidebar.component.css']
})
export class AdminSlidebarComponent implements OnInit {
  firstName: string = ""
  constructor() { }

  ngOnInit(): void {
    this.firstName = localStorage.getItem("firstName") as string
  }

}
