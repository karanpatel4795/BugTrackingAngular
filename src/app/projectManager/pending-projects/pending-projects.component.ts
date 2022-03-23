import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';

@Component({
  selector: 'app-pending-projects',
  templateUrl: './pending-projects.component.html',
  styleUrls: ['./pending-projects.component.css']
})
export class PendingProjectsComponent implements OnInit {

  projectManagerId: string = ""
  projects: Array<any> = []
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getAllPendingProject()
  }

  getAllPendingProject() {
    this.projectManagerId = localStorage.getItem("userId") as string
    //console.log(this.projectManagerId);
        
    this.projectService.getAllPendingProject(this.projectManagerId).subscribe(resp => {
      this.projects = resp.data
      console.log(resp);
    })
  }

}
