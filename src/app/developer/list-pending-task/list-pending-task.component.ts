import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';
import { RoleService } from 'src/app/admin/role.service';

@Component({
  selector: 'app-list-pending-task',
  templateUrl: './list-pending-task.component.html',
  styleUrls: ['./list-pending-task.component.css']
})
export class ListPendingTaskComponent implements OnInit {

  projectId: string = ""
  moduleId: string = ""
  devId: string = ""
  projects: Array<any> = []
  pendingTasks: Array<any> = []
  priority: string = ""
  constructor(private projectService: ProjectService, private roleService: RoleService, private toastrService: ToastrService, private route: Router) { }


  ngOnInit(): void {
    this.devId = localStorage.getItem("userId") as string
    this.projectService.getPendingTaskforDev(this.devId).subscribe(resp => {
     // console.log(resp);
      
      this.pendingTasks = resp.data
      for (let i = 0; i < this.pendingTasks.length; i++) {
        this.roleService.getpriorityName(resp.data[0].taskId.priorityId).subscribe(resp => {
          this.priority = resp.data[0].priorityName
        })
      }
      
    })

  }
  submitTask(taskId: any) {
    this.route.navigateByUrl("/developer/submit-task/" + taskId)
  }
}
