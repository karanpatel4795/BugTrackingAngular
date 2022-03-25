import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  users: Array<any> = []
  projects: Array<any> = []
  modules: Array<any> = []
  tasks: Array<any> = []
  pendingProject:Array<any>=[]
  completedProject:Array<any>=[]
  constructor(private roleService: RoleService,private projectService:ProjectService) { }

  ngOnInit(): void {
    this.roleService.getAllUsers().subscribe(resp => {
      this.users = resp.data.length
    })
    this.projectService.getAllProject().subscribe(resp => {
      this.projects = resp.data.length
    })
    this.projectService.getAllModule().subscribe(resp => {
      this.modules = resp.data.length
    })
    this.projectService.getAllTask().subscribe(resp => {
      this.tasks = resp.data.length
    })
    this.projectService.getAllPendingProjects().subscribe(resp => {
      this.pendingProject = resp.data.length
    })
    this.projectService.getAllCompletedProjects().subscribe(resp => {
      this.completedProject = resp.data.length
    })
  }

}
