import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../../project.service';
import { RoleService } from '../../role.service';

@Component({
  selector: 'app-devloper-report',
  templateUrl: './devloper-report.component.html',
  styleUrls: ['./devloper-report.component.css']
})
export class DevloperReportComponent implements OnInit {

  constructor(private roleService: RoleService, private projectService: ProjectService, private router: Router, private toastrService: ToastrService) { }
  devId: string = ""
  devlopers: Array<any> = []
  tasks: Array<any> = []

  ngOnInit(): void {
    this.projectService.getAllDevs().subscribe(resp => {
      this.devlopers = resp.data
    })
  }

  getTaskbyDev(event: any) {
    const project = event.target.value;
    //console.log(project);

    this.roleService.getTaskbyProject(project).subscribe(resp => {
      console.log(resp);
      this.tasks = resp.data
    })
  }

}
