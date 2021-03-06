import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-assign-module',
  templateUrl: './assign-module.component.html',
  styleUrls: ['./assign-module.component.css']
})
export class AssignModuleComponent implements OnInit {

  userId: string = ""
  userName: string = ""
  status: string = ""
  button: string = ""
  projectId: string = ""
  projectTitle: string = ""
  moduleId: string = ""
  modules: Array<any> = []
  constructor(private roleService: RoleService, private activatedRoute: ActivatedRoute, private projectService: ProjectService, private toastrService: ToastrService, private route: Router) { }

  ngOnInit(): void {

    this.projectId = localStorage.getItem("projectId") as string
    this.userId = this.activatedRoute.snapshot.params['user']

    this.projectService.getProjectTitle(this.projectId).subscribe(resp => {
      this.projectTitle = resp.data[0].projectTitle
    })
    this.roleService.getuserName(this.userId).subscribe(resp => {
      this.userName = resp.data[0].firstName
    })
    this.projectService.getModulebyProject(this.projectId).subscribe(resp => {
      //console.log(resp);
      this.modules = resp.data
    })

  }

  assignModulektoUser() {
    let module={moduleId:this.moduleId,moduleUser:this.userId}
    this.projectService.assignModule(module).subscribe(resp => {
      if(resp.status == 200){
        this.toastrService.success("",resp.msg,{timeOut:3000})
        this.route.navigateByUrl("/admin/list-projectTeam")
      }else{
        this.toastrService.error("",resp.msg,{timeOut:3000})
      }

    })
  }


}
