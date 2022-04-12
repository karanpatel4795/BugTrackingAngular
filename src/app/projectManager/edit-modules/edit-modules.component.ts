import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';

@Component({
  selector: 'app-edit-modules',
  templateUrl: './edit-modules.component.html',
  styleUrls: ['./edit-modules.component.css']
})
export class EditModulesComponent implements OnInit {
  constructor(private projectService: ProjectService, private router: Router, private toastrService: ToastrService, private activatedRouted: ActivatedRoute) { }
  moduleId: string = ""
  moduleName: string = ""
  description: string = ""
  priorityId: string = ""
  projectTitle: string = ""
  projectId: string = ""
  estimatedTime: string = ""
  projects: Array<any> = []
  priority: Array<any> = []
  ngOnInit(): void {
    this.projectService.getAllPriority().subscribe(resp => {
      this.priority = resp.data
    })
    this.moduleId = this.activatedRouted.snapshot.params['moduleId']
    console.log(this.moduleId);
    
    this.getModuleById()
  }

  getModuleById() {
    this.projectService.getModuleById(this.moduleId).subscribe(resp => {
      console.log(resp);

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
      priorityId: this.priorityId
    }

    this.projectService.updateModule(module).subscribe(resp => {
      console.log(resp)
      if (resp.status == 200) {
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
        this.router.navigateByUrl("/project-manager/list-modules")
      } else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }

}
