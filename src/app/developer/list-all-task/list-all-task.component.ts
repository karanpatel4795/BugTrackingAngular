import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';
import { RoleService } from 'src/app/admin/role.service';

@Component({
  selector: 'app-list-all-task',
  templateUrl: './list-all-task.component.html',
  styleUrls: ['./list-all-task.component.css']
})
export class ListAllTaskComponent implements OnInit {

  projectId: string = ""
  moduleId: string = ""
  devId: string = ""
  projects: Array<any> = []
  tasks: Array<any> = []
  priority: string = ""
  constructor(private projectService: ProjectService, private roleService: RoleService, private toastrService: ToastrService,private route:Router) { }


  ngOnInit(): void {
    this.devId = localStorage.getItem("userId") as string
    let user = { devId: this.devId }
    this.roleService.getTaskbyDevelop(user).subscribe(resp => {
      this.tasks = resp.data

      for (let i = 0; i < this.tasks.length; i++) {
        this.roleService.getpriorityName(resp.data[0].taskId.priorityId).subscribe(resp => {
          this.priority = resp.data[0].priorityName
        })
      }
    })
  }
  submitTask(taskId: any) {
    this.projectService.getTaskById(taskId).subscribe(resp => {
      if(resp.data.testerId!=null){
        this.toastrService.error("", "Already Submitted!", { timeOut: 3000 })
      }
      else{
        this.route.navigateByUrl("/developer/submit-task/" + taskId)
      }
    })
  }


}
