import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: Router, private toastrService: ToastrService) { }
  moduleName: string = ""
  description: string = ""
  estimatedTime: string = ""
  priorityId: string = ""
  projectId: string = ""
  project: Array<any> = []
  priority: Array<any> = []
  
  ngOnInit(): void {
    this.projectService.getAllProject().subscribe(resp => {
      this.project = resp.data
    })
    this.projectService.getAllPriority().subscribe(resp => {
      this.priority = resp.data
    })
  }

  addModule() {
    let module = { moduleName: this.moduleName, description: this.description, estimatedTime: this.estimatedTime, projectId: this.projectId, priorityId: this.priorityId }
   console.log(module)
    this.projectService.addModule(module).subscribe(resp => {
      if (resp.status == 200) {
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
        this.router.navigateByUrl("/admin/list-module")
      } else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }

    })

  }

}
