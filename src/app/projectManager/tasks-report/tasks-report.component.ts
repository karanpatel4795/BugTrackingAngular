import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/admin/project.service';
import { RoleService } from 'src/app/admin/role.service';

@Component({
  selector: 'app-tasks-report',
  templateUrl: './tasks-report.component.html',
  styleUrls: ['./tasks-report.component.css']
})
export class TasksReportComponent implements OnInit {

  constructor(private roleService: RoleService, private projectService: ProjectService) { }

  statusId: string = ""
  status: Array<any> = []
  tasks: Array<any> = []
  ngOnInit(): void {
    this.roleService.getAllStatus().subscribe(resp => {
      this.status = resp.data
    })
  }

  getTaskbyStatus() {
    this.roleService.getTaskbyStatus(this.statusId).subscribe(resp => {
      console.log(resp);
      this.tasks = resp.data
    })
  }

}
