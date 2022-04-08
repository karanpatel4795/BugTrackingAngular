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
  projects: Array<any> = []
  tasks: Array<any> = []

  ngOnInit(): void {
    this.projectService.getAllProject().subscribe(resp => {
      this.projects = resp.data
    })
  }

  getTaskbyProject(event: any) {
    const project = event.target.value;
    //console.log(project);

    this.roleService.getTaskbyProject(project).subscribe(resp => {
      console.log(resp);
      this.tasks = resp.data
    })
  }
}
