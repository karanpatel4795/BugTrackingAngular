import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/admin/project.service';
import { RoleService } from 'src/app/admin/role.service';

@Component({
  selector: 'app-developer-list-projects',
  templateUrl: './developer-list-projects.component.html',
  styleUrls: ['./developer-list-projects.component.css']
})
export class DeveloperListProjectsComponent implements OnInit {

  projects: Array<any> = []
  devId: String = ""
  userId: string = ""
  userName: Array<any> = []
  constructor(private projectService: ProjectService, private route: Router, private roleService: RoleService) { }

  ngOnInit(): void {

    this.devId = localStorage.getItem('userId') as string
    this.getAllProject()
  }
  viewTask(projectId: any) {
    this.route.navigateByUrl("/developer/viewTask/" + projectId)
  }
  getAllProject() {
    this.projectService.getProjectforDev(this.devId).subscribe(resp => {
      // console.log(resp);
      this.projects = resp.data
      for (let i = 0; i < this.projects.length; i++) {
        this.roleService.getuserName(resp.data[i].projectId.projectManagerID).subscribe(resp => {
          this.userName = resp.data[0].firstName
        })
      }

    })
  }


}
