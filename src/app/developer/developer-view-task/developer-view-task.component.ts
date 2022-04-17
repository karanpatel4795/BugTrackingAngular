import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';
import { RoleService } from 'src/app/admin/role.service';

@Component({
  selector: 'app-developer-view-task',
  templateUrl: './developer-view-task.component.html',
  styleUrls: ['./developer-view-task.component.css']
})
export class DeveloperViewTaskComponent implements OnInit {

  tasks: Array<any> = []
  ProjectId: String = ""
  devId: string = ""
  status: string = ""
  priority: string = ""
  constructor(private projectService: ProjectService, private toastrService: ToastrService, private route: Router, private activatedRoute: ActivatedRoute, private roleService: RoleService) { }

  ngOnInit(): void {
    this.devId = localStorage.getItem('userId') as string
    this.ProjectId = this.activatedRoute.snapshot.params['projectId']
    //console.log(this.ProjectId);
    this.getAllTasks()
  }
  getAllTasks() {
    let project = {
      projectId: this.ProjectId,
      devId: this.devId
    }
    this.projectService.getTaskbyProjectforDev(project).subscribe(resp => {
      console.log(resp)
      this.tasks = resp.data
      for (let i = 0; i < this.tasks.length; i++) {
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
