import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-list-project-team',
  templateUrl: './list-project-team.component.html',
  styleUrls: ['./list-project-team.component.css']
})
export class ListProjectTeamComponent implements OnInit {
  projectId: string = ""
  project: string = ""
  projects: Array<any> = []
  projectTeam:string=""
  constructor(private projectService: ProjectService, private toastrService: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.projectService.getAllProject().subscribe(resp => {
      this.projects = resp.data
    })
  }

  getProjectTeambyProject(event: any) {
    const project = event.target.value;
    this.projectService.getProjectTeambyProject(project).subscribe(resp => {
      this.projectTeam = resp.data
      console.log(resp.data[0].projectId.projectTitle);
      
      console.log(resp.data.projectId);
      
    })
  }

}
