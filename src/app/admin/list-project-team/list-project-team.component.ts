import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-list-project-team',
  templateUrl: './list-project-team.component.html',
  styleUrls: ['./list-project-team.component.css']
})
export class ListProjectTeamComponent implements OnInit {

  projects:Array<any> = []
  constructor(private projectService:ProjectService, private toastrService:ToastrService, private route:Router) { }

  ngOnInit(): void {
          this.getAllProject()
  }
  deleteProject(projectId:any){
    this.projectService.deleteProject(projectId).subscribe(resp=>{
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
    this.projectService.getAllProject().subscribe(resp=>{
      this.projects =  resp.data
      
      //console.log(resp);
      //console.log(this.projects);
      
    }) 
  }

}
