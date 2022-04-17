import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';
import { RoleService } from 'src/app/admin/role.service';

@Component({
  selector: 'app-test-task',
  templateUrl: './test-task.component.html',
  styleUrls: ['./test-task.component.css']
})
export class TestTaskComponent implements OnInit {

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
  testerName:string=""
  status:string=""
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
      this.testerName=resp.data.testerId.firstName
      this.projectService.getTesterbyProject(resp.data.projectId._id).subscribe(resp => {
        this.tester = resp.data
      })
    })

  }

  noBug() {
    let task = { taskId: this.taskId, taskUser: this.userId}
    this.projectService.noBug(task).subscribe(resp => {
      if (resp.status == 200) {
        this.route.navigateByUrl("/tester/list-all-task")
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
      } else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }

    })
  }
  BugFound(){
    this.route.navigateByUrl("/tester/bug-Assign/"+this.taskId)

  }


}
