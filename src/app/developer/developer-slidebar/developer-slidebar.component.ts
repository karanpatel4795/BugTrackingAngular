import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/admin/project.service';

@Component({
  selector: 'app-developer-slidebar',
  templateUrl: './developer-slidebar.component.html',
  styleUrls: ['./developer-slidebar.component.css']
})
export class DeveloperSlidebarComponent implements OnInit {
  devId: string = ""
  firstName: string = ""
  projects: Array<any> = []
  //projectTitle: Array<any> = []
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    // this.devId = localStorage.getItem('userId') as string
    this.firstName = localStorage.getItem('firstName') as string
  }

}