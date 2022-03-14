import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: Router, private toastrService: ToastrService) { }
  taskName: string = ""
  moduleId: string = ""
  projectId: string = ""
  description: string = ""
  totalTime: string = ""
  priorityId: string = ""
  project: Array<any> = []
  module: Array<any> = []
  priority: Array<any> = []

  ngOnInit(): void {
    this.projectService.getAllProject().subscribe(resp => {
      this.project = resp.data
    })
    this.projectService.getAllModule().subscribe(resp => {
      this.module = resp.data
    })
    this.projectService.getAllPriority().subscribe(resp => {
      this.priority = resp.data
    })
  }

  addTask() {
    let task = { taskName: this.taskName, description: this.description, totalTime: this.totalTime, projectId: this.projectId, moduleId: this.moduleId, priorityId: this.priorityId }
    console.log(task)
    this.projectService.addTask(task).subscribe(resp => {
      if (resp.status == 200) {
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
        this.router.navigateByUrl("/admin/list-task")
      } else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }

    })

  }

}
