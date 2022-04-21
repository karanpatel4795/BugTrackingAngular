import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/admin/project.service';
import { RoleService } from 'src/app/admin/role.service';

@Component({
  selector: 'app-list-bug-task',
  templateUrl: './list-bug-task.component.html',
  styleUrls: ['./list-bug-task.component.css']
})
export class ListBugTaskComponent implements OnInit {

  projectId: string = ""
  moduleId: string = ""
  devId: string = ""
  projects: Array<any> = []
  bugTasks: Array<any> = []
  priority: string = ""
  projectTitle:string=""
  moduleName:string=""
  bugStatus:string=""
  constructor(private projectService: ProjectService, private roleService: RoleService, private route: Router) { }


  ngOnInit(): void {
    this.devId = localStorage.getItem("userId") as string
    this.projectService.getbugTaskforDev(this.devId).subscribe(resp => {
     //console.log(resp);
      
      this.bugTasks = resp.data
      for (let i = 0; i < this.bugTasks.length; i++) {
        this.projectService.getProjectById(resp.data[i].taskId.projectId).subscribe(resp => {
          this.projectTitle = resp.data.projectTitle
        })
        this.projectService.getModuleById(resp.data[i].taskId.moduleId).subscribe(resp=>{
          this.moduleName = resp.data.moduleName
        })
        this.projectService.getStatusName(resp.data[i].taskId.bugStatus).subscribe(resp=>{
          //console.log(resp);
          this.bugStatus=resp.data[0].statusName
          
        })
      }
      
    })

  }
  submitTask(taskId: any) {
    this.route.navigateByUrl("/developer/submit-task/" + taskId)
  }

}
