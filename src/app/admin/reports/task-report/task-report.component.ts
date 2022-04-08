import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../../project.service';
import { RoleService } from '../../role.service';

@Component({
  selector: 'app-task-report',
  templateUrl: './task-report.component.html',
  styleUrls: ['./task-report.component.css']
})
export class TaskReportComponent implements OnInit {

  constructor(private roleService: RoleService, private projectService: ProjectService, private router: Router, private toastrService: ToastrService) { }
  projectId: string = ""
  statusId: string = ""
  projects: Array<any> = []
  status: Array<any> = []
  tasks: Array<any> = []
  ngOnInit(): void {
    this.projectService.getAllProject().subscribe(resp => {
      this.projects = resp.data
    })
    this.roleService.getAllStatus().subscribe(resp => {
      this.status = resp.data
    })
  }

  getTaskbyProject() {
   let project = {projectId: this.projectId,statusId: this.statusId}
    console.log(project);

    this.roleService.getTaskbyProject(project).subscribe(resp => {
      console.log(resp);
      this.tasks = resp.data
    })
  }
}
