import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';

@Component({
  selector: 'app-bug-assign',
  templateUrl: './bug-assign.component.html',
  styleUrls: ['./bug-assign.component.css']
})
export class BugAssignComponent implements OnInit {

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
  DevName:string=""
  status:string=""
  bugList:Array<any>=[]
  bugNameId:string=""
  developerId:string=""
  constructor(private activatedRoute: ActivatedRoute, private projectService: ProjectService, private toastrService: ToastrService, private route: Router) { }

  ngOnInit(): void {

    this.taskId = this.activatedRoute.snapshot.params['taskId']
    this.userId = localStorage.getItem('userId') as string
    this.projectService.getAllBugs().subscribe(resp=>{
      this.bugList = resp.data
    })
    this.projectService.getTaskById(this.taskId).subscribe(resp => {
      //console.log(resp);
      this.projectTitle = resp.data.projectId.projectTitle
      this.moduleName = resp.data.moduleId.moduleName
      this.TaskName = resp.data.taskName
      this.projectId = resp.data.projectId._id
      this.moduleId=resp.data.moduleId._id
      this.developerId=resp.data.developerId._id
      this.DevName=resp.data.developerId.firstName
      this.projectService.getTesterbyProject(resp.data.projectId._id).subscribe(resp => {
        this.tester = resp.data
      })
    })

  }

  AssignBug() {
    let task = { taskId: this.taskId,developerId:this.developerId ,testerId: this.userId,bugName:this.bugNameId}
    this.projectService.BugFound(task).subscribe(resp => {
      if (resp.status == 200) {
        this.route.navigateByUrl("/tester/list-all-task")
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
      } else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }

    })
  }

}
