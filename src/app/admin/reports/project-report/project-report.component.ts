import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../../project.service';
import { RoleService } from '../../role.service';

@Component({
  selector: 'app-project-report',
  templateUrl: './project-report.component.html',
  styleUrls: ['./project-report.component.css']
})
export class ProjectReportComponent implements OnInit {

  constructor(private roleService: RoleService, private projectService: ProjectService, private router: Router, private toastrService: ToastrService) { }
  statusId: string = ""
  projects: Array<any> = []
  status: Array<any> = []

  ngOnInit(): void {
    this.roleService.getAllStatus().subscribe(resp => {
      this.status = resp.data
    })
  }

  getprojectbyStatus(event: any) {
    const status = event.target.value;
    this.roleService.getprojectbyStatus(status).subscribe(resp => {
      this.projects = resp.data
    })
  }

}
