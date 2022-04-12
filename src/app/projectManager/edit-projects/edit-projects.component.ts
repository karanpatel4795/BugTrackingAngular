import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css']
})
export class EditProjectsComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: Router, private toastrService: ToastrService, private activatedRouted: ActivatedRoute) { }
  projectId: string = ""
  projectTitle: string = ""
  projectDescription: string = ""
  projectTechnology: string = ""
  projectManager: string = ""
  estimateHours: string = ""
  status: string = ""
  managers: Array<any> = []
  ngOnInit(): void {
    this.projectService.getAllManager().subscribe(resp => {
      this.managers = resp.data
    })
    this.projectId = this.activatedRouted.snapshot.params['projectId']
    this.getProjectById()
  }

  getProjectById() {
    this.projectService.getProjectById(this.projectId).subscribe(resp => {
      //console.log(resp) 
      this.projectTitle = resp.data.projectTitle
      this.projectId = resp.data._id
       this.projectDescription = resp.data.description
      this.projectManager = resp.data.projectManagerID
      this.estimateHours = resp.data.estimatedHours
      this.status = resp.data.statusId
      this.projectTechnology = resp.data.technology
    })
  }

  updateProject() {
    let project = {
      projectId: this.projectId,
      projectTitle: this.projectTitle,
      description: this.projectDescription,
      projectManagerID: this.projectManager,
      estimatedHours: this.estimateHours,
      statusId : this.status,
      projectTechnology:this.projectTechnology
    }    
    this.projectService.updateProject(project).subscribe(resp => {
     console.log(resp)
      if (resp.status == 200) {
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
        this.router.navigateByUrl("/project-manager/list-projects")
      } else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }

}
