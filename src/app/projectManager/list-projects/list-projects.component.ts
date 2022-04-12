import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {
  projectManagerId: string = ""
  projects: Array<any> = []
  constructor(private projectService: ProjectService, private toastrService: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.getAllProject()
  }
  deleteProject(projectId: any) {
    this.projectService.deleteProject(projectId).subscribe(resp => {
      if (resp.status = 200) {
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
        this.getAllProject()
      }
      else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }

  editProject(projectId: any) {
    this.route.navigateByUrl("/project-manager/edit-projects/" + projectId)
  }
  getAllProject() {
    this.projectManagerId = localStorage.getItem("userId") as string
    //console.log(this.projectManagerId);

    this.projectService.getAllProjects(this.projectManagerId).subscribe(resp => {
      this.projects = resp.data
      //console.log(resp);
    })
  }
  ViewTeam(projectId: any) {
    // console.log(projectId);
    this.route.navigateByUrl("/project-manager/viewTeam/" + projectId)
  }

}
