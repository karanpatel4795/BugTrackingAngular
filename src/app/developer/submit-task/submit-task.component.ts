import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';
import { RoleService } from 'src/app/admin/role.service';

@Component({
  selector: 'app-submit-task',
  templateUrl: './submit-task.component.html',
  styleUrls: ['./submit-task.component.css']
})
export class SubmitTaskComponent implements OnInit {

  userId: string = ""
  firstName: string = ""
  testerId: string = ""
  projectTitle: string = ""
  moduleName: String = ""
  taskId: string = ""
  TaskName: Array<any> = []
  tester: Array<any> = []
  projectId: string = ""
  moduleId: string = ""
  time:string=""
  constructor(private roleService: RoleService, private activatedRoute: ActivatedRoute, private projectService: ProjectService, private toastrService: ToastrService, private route: Router) { }

  ngOnInit(): void {

    this.taskId = this.activatedRoute.snapshot.params['taskId']
    this.userId = localStorage.getItem('userId') as string
    this.projectService.getTaskById(this.taskId).subscribe(resp => {
      //console.log(resp);
      this.projectTitle = resp.data.projectId.projectTitle
      this.moduleName = resp.data.moduleId.moduleName
      this.TaskName = resp.data.taskName
      this.projectId = resp.data.projectId._id
      this.moduleId=resp.data.moduleId._id
      this.projectService.getTesterbyProject(resp.data.projectId._id).subscribe(resp => {
        this.tester = resp.data
      })
    })

  }

  submitTask() {

    let task = { taskId: this.taskId, taskUser: this.userId, projectId: this.projectId, moduleId: this.moduleId, testerId: this.testerId,time:this.time }
    //console.log(this.testerId);
    
    this.projectService.submitTask(task).subscribe(resp => {
      if (resp.status == 200) {
        this.route.navigateByUrl("/developer/list-projects")
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
      } else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }

    })
  }


}
