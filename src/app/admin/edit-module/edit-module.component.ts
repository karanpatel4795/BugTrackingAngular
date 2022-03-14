import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-module',
  templateUrl: './edit-module.component.html',
  styleUrls: ['./edit-module.component.css']
})
export class EditModuleComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: Router, private toastrService: ToastrService, private activatedRouted: ActivatedRoute) { }
  moduleId: string = ""
  moduleName: string = ""
  description: string = ""
  priorityId: string = ""
  projectTitle : string = "" 
  projectId: string = ""
  estimatedTime: string = ""
  projects: Array<any> = []
  priority: Array<any> = []
  ngOnInit(): void {
    this.projectService.getAllProject().subscribe(resp => {
      this.projects = resp.data

    })
    this.projectService.getAllPriority().subscribe(resp => {
      this.priority = resp.data
    })
    this.moduleId = this.activatedRouted.snapshot.params['moduleId']
    this.getModuleById()
  }

  getModuleById() {
    this.projectService.getModuleById(this.moduleId).subscribe(resp => {
      this.moduleName = resp.data.moduleName
      this.moduleId = resp.data._id
       this.description = resp.data.description
      this.priorityId = resp.data.priorityId._id
      this.estimatedTime = resp.data.estimatedTime
      this.projectId = resp.data.projectId._id
      this.projectTitle = resp.data.projectId.projectTitle
    })
  }

  updateModule() {
    let module = {
      projectId: this.moduleId,
      moduleName: this.moduleName,
      description: this.description,
      moduleId: this.moduleId,
      estimatedTime: this.estimatedTime,
      priorityId : this.priorityId
    }
        
    this.projectService.updateModule(module).subscribe(resp => {
     console.log(resp)
      if (resp.status == 200) {
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
        this.router.navigateByUrl("/admin/list-module")
      } else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }

}
