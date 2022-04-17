import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';
import { RoleService } from 'src/app/admin/role.service';

@Component({
  selector: 'app-tester-list-all-task',
  templateUrl: './tester-list-all-task.component.html',
  styleUrls: ['./tester-list-all-task.component.css']
})
export class TesterListAllTaskComponent implements OnInit {

  tasks: Array<any> = []
  ProjectId: String = ""
  testerId: string = ""
  status: string = ""
  priority: string = ""
  constructor(private projectService: ProjectService, private toastrService: ToastrService, private route: Router, private activatedRoute: ActivatedRoute, private roleService: RoleService) { }

  ngOnInit(): void {
    this.testerId = localStorage.getItem('userId') as string
    this.getAllTasks()
  }
  getAllTasks() {
    
    this.projectService.getTaskbyTester(this.testerId).subscribe(resp => {
      console.log(resp)
      this.tasks = resp.data
    })
  }

  
  submitTask(taskId:any) {
    this.projectService.getTaskById(taskId).subscribe(resp => {
      if(resp.data.bugStatus!="625030ca592b3cd09e3a96df"){
        this.toastrService.error("", "Already Submitted!", { timeOut: 3000 })
      }
      else{
        this.route.navigateByUrl("/tester/test-task/" + taskId)
      }
    })
  }

}
