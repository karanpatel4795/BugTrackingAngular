import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: Router, private toastrService: ToastrService, private activatedRouted: ActivatedRoute) { }
  taskId: string = ""
  taskName: string = ""
  description: string = ""
  totalTime: string = ""
  moduleName: string = ""
  projectTitle: string = ""
  priorityId: string = ""
  projects: Array<any> = []
  priority: Array<any> = []
  modules: Array<any> = []
  ngOnInit(): void {
    this.projectService.getAllProject().subscribe(resp => {
      this.projects = resp.data

    })
    this.projectService.getAllPriority().subscribe(resp => {
      this.priority = resp.data
    })
    this.projectService.getAllModule().subscribe(resp => {
      this.modules = resp.data
    })
    this.taskId = this.activatedRouted.snapshot.params['taskId']
    this.getTaskById()
  }

  getTaskById() {
    this.projectService.getTaskById(this.taskId).subscribe(resp => {
      this.taskId = resp.data._id
      this.taskName = resp.data.taskName
      this.description = resp.data.description
      this.totalTime = resp.data.totalTime
      this.moduleName = resp.data.moduleId.moduleName
      this.priorityId = resp.data.priorityId._id
      this.projectTitle = resp.data.projectId.projectTitle
     console.log(resp)
    })
  }

  updateTask() {
    let task = {
      taskId: this.taskId,
      taskName: this.taskName,
      description: this.description,
      totalTime: this.totalTime,
      priorityId: this.priorityId,
    }

    this.projectService.updateTask(task).subscribe(resp => {
      console.log(resp)
      if (resp.status == 200) {
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
        this.router.navigateByUrl("/admin/list-task")
      } else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }

}
