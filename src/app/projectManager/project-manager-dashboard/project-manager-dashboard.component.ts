import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/admin/project.service';
import { RoleService } from 'src/app/admin/role.service';

@Component({
  selector: 'app-project-manager-dashboard',
  templateUrl: './project-manager-dashboard.component.html',
  styleUrls: ['./project-manager-dashboard.component.css']
})
export class ProjectManagerDashboardComponent implements OnInit {

  users: Array<any> = []
  projects: Array<any> = []
  modules: Array<any> = []
  tasks: Array<any> = []
  pendingProject: Array<any> = []
  completedProject: Array<any> = []
  projectManagerId: string = ""
  constructor(private roleService: RoleService, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectManagerId = localStorage.getItem("userId") as string
    this.roleService.getAllUser().subscribe(resp => {
      this.users = resp.data.length
    })
    this.projectService.getAllProjects(this.projectManagerId).subscribe(resp => {
      this.projects = resp.data.length
    })
    this.projectService.getAllModule().subscribe(resp => {
      this.modules = resp.data.length
    })
    this.projectService.getAllTask().subscribe(resp => {
      this.tasks = resp.data.length
    })

    this.getAllPendingProject()
    this.getAllCompletedProject()
  }
  getAllPendingProject() {
    this.projectManagerId = localStorage.getItem("userId") as string
    this.projectService.getAllPendingProject(this.projectManagerId).subscribe(resp => {
      this.pendingProject = resp.data.length
    })
  }
  getAllCompletedProject() {
    this.projectManagerId = localStorage.getItem("userId") as string
    this.projectService.getAllCompletedProject(this.projectManagerId).subscribe(resp => {
      this.completedProject = resp.data.length
    })
  }

}
