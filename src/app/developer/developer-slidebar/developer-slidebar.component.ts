import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer-slidebar',
  templateUrl: './developer-slidebar.component.html',
  styleUrls: ['./developer-slidebar.component.css']
})
export class DeveloperSlidebarComponent implements OnInit {
  firstName: string = ""
  constructor() { }

  ngOnInit(): void {
    this.firstName = localStorage.getItem("firstName") as string
  }

}
