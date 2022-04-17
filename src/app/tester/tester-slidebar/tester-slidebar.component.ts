import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tester-slidebar',
  templateUrl: './tester-slidebar.component.html',
  styleUrls: ['./tester-slidebar.component.css']
})
export class TesterSlidebarComponent implements OnInit {

  devId: string = ""
  firstName: string = ""
  constructor() { }

  ngOnInit(): void {

    this.firstName = localStorage.getItem('firstName') as string
  }

}
