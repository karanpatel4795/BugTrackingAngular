import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-manager-slidebar',
  templateUrl: './project-manager-slidebar.component.html',
  styleUrls: ['./project-manager-slidebar.component.css']
})
export class ProjectManagerSlidebarComponent implements OnInit {
  firstName: string = ""
  constructor() { }

  ngOnInit(): void {
    this.firstName = localStorage.getItem("firstName") as string
  }

}
