import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';
import { RoleService } from 'src/app/admin/role.service';

@Component({
  selector: 'app-assign-tasks',
  templateUrl: './assign-tasks.component.html',
  styleUrls: ['./assign-tasks.component.css']
})
export class AssignTasksComponent implements OnInit {

  userId: string = ""
  userName: string = ""
  status: string = ""
  button: string = ""
  projectId: string = ""
  projectTitle: string = ""
  taskId: string = ""
  tasks: Array<any> = []
  constructor(private roleService: RoleService, private activatedRoute: ActivatedRoute, private projectService: ProjectService, private toastrService: ToastrService, private route: Router) { }

  ngOnInit(): void {

    this.projectId = localStorage.getItem("projectId") as string
    this.userId = this.activatedRoute.snapshot.params['user']

    this.projectService.getProjectTitle(this.projectId).subscribe(resp => {
      this.projectTitle = resp.data[0].projectTitle
    })
    this.roleService.getuserName(this.userId).subscribe(resp => {
      this.userName = resp.data[0].firstName
    })
    this.projectService.getTaskbyProject(this.projectId).subscribe(resp => {
      //console.log(resp);
      this.tasks = resp.data
    })

  }

  assignTasktoUser() {
    let task={taskId:this.taskId,taskUser:this.userId}
    this.projectService.assignTask(task).subscribe(resp => {
      if(resp.status == 200){
        this.route.navigateByUrl("/project-manager/list-projects")
        this.toastrService.success("",resp.msg,{timeOut:3000})
      }else{
        this.toastrService.error("",resp.msg,{timeOut:3000})
      }

    })
  }

}
