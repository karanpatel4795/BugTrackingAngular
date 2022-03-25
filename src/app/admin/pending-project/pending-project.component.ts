import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-pending-project',
  templateUrl: './pending-project.component.html',
  styleUrls: ['./pending-project.component.css']
})
export class PendingProjectComponent implements OnInit {

  projects: Array<any> = []
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getAllPendingProject()
  }

  getAllPendingProject() {

    this.projectService.getAllPendingProjects().subscribe(resp => {
      this.projects = resp.data
      console.log(resp);
    })
  }

}
