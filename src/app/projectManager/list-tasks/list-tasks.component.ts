import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';
import { RoleService } from 'src/app/admin/role.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  projectId: string = ""
  moduleId:string=""
  projectManagerId:string=""
  projects: Array<any> = []
  modules: Array<any> = []
  tasks: Array<any> = []
  constructor(private roleService:RoleService,private projectService: ProjectService, private toastrService: ToastrService, private route: Router) { }

 
  ngOnInit(): void {
    this.projectManagerId = localStorage.getItem("userId") as string
    this.projectService.getAllProjects(this.projectManagerId).subscribe(resp => {
      this.projects = resp.data
    })
  }

  getModulebyproject(event:any) {
    const project = event.target.value;
   // console.log(project)
    this.projectService.getModulebyproject(project).subscribe(resp => {
      this.modules = resp.data
     //console.log(this.modules)
    })
  }
  getTaskbyModule() {

    this.projectService.getTaskbyModule(this.moduleId).subscribe(resp => {
      //console.log(resp);
      this.tasks = resp.data
    })
  }

}
