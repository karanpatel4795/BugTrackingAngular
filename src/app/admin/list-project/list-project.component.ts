import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {

  projects:Array<any> = []
  constructor(private roleService:RoleService, private toastrService:ToastrService, private route:Router) { }

  ngOnInit(): void {
          this.getAllProject()
  }
  deleteProject(projectId:any){
    this.roleService.deleteProject(projectId).subscribe(resp=>{
      if(resp.status=200){
        this.toastrService.success("",resp.msg,{timeOut:3000})
        this.getAllProject()
      }
      else{
        this.toastrService.error("",resp.msg,{timeOut:3000})
      }
    })
  }
  
  editProject(projectId:any){
    this.route.navigateByUrl("/admin/editproject/"+projectId)
  }
  getAllProject(){
    this.roleService.getAllProject().subscribe(resp=>{
      this.projects =  resp.data
      
      //console.log(resp);
      //console.log(this.projects);
      
    }) 
  }

}
