import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/admin/project.service';
import { RoleService } from 'src/app/admin/role.service';

@Component({
  selector: 'app-tester-dashboard',
  templateUrl: './tester-dashboard.component.html',
  styleUrls: ['./tester-dashboard.component.css']
})
export class TesterDashboardComponent implements OnInit {

  users: Array<any> = []
  bugs: Array<any> = []
  tasks: Array<any> = []
  pendingTasks: Array<any> = []
  testerId: string = ""
  constructor(private roleService: RoleService, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.testerId = localStorage.getItem('userId') as string

    this.projectService.getBugforTester(this.testerId).subscribe(resp => {
      this.bugs = resp.data.length
    })
    this.projectService.getTaskbyTester(this.testerId).subscribe(resp => {
      this.tasks = resp.data.length
    })
    this.projectService.getPendingTaskforTester(this.testerId).subscribe(resp => {
      this.pendingTasks = resp.data.length
    })
  }

}
