import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-completed-project',
  templateUrl: './completed-project.component.html',
  styleUrls: ['./completed-project.component.css']
})
export class CompletedProjectComponent implements OnInit {

  projects: Array<any> = []
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getAllCompletedProject()
  }

  getAllCompletedProject() {
    this.projectService.getAllCompletedProjects().subscribe(resp => {
      this.projects = resp.data
     // console.log(resp);
    })
  }

}
