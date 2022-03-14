import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks: Array<any> = []
  constructor(private projectService: ProjectService, private toastrService: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.getAllTasks()
  }
  getAllTasks() {
    this.projectService.getAllTask().subscribe(resp => {
     console.log(resp)
      this.tasks = resp.data
    })
  }
  deleteTask(taskId: any) {
    this.projectService.deleteTask(taskId).subscribe(resp => {
      if (resp.status = 200) {
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
        this.getAllTasks()
      }
      else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }

  editModule(moduleId: any) {
    this.route.navigateByUrl("/admin/edit-task/" + moduleId)
  }

}
