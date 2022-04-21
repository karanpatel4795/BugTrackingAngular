import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/admin/project.service';
import { RoleService } from 'src/app/admin/role.service';

@Component({
  selector: 'app-tester-list-pending-task',
  templateUrl: './tester-list-pending-task.component.html',
  styleUrls: ['./tester-list-pending-task.component.css']
})
export class TesterListPendingTaskComponent implements OnInit {

  projectId: string = ""
  moduleId: string = ""
  devId: string = ""
  projects: Array<any> = []
  pendingTasks: Array<any> = []
  priority: string = ""
  constructor(private projectService: ProjectService, private roleService: RoleService, private route: Router) { }


  ngOnInit(): void {
    this.devId = localStorage.getItem("userId") as string
    this.projectService.getPendingTaskforTester(this.devId).subscribe(resp => {
     //console.log(resp);
      
      this.pendingTasks = resp.data      
    })

  }
  submitTask(taskId: any) {
    this.route.navigateByUrl("/tester/test-task/" + taskId)
  }

}
