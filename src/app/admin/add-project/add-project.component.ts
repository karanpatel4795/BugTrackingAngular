import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(private projectService:ProjectService,private router:Router,private toastrService:ToastrService) { }
  projectName:string =""
  projectDescription:string=""
  projectTechnology:string=""
  projectManager:string=""
  estimateHours:string=""
  managers: Array<any> = []
  ngOnInit(): void {
      this.projectService.getAllManager().subscribe(resp => {
        this.managers = resp.data  
      })
    }

  addProject(){
    let project = {projectTitle:this.projectName,description:this.projectDescription,technology:this.projectTechnology,projectManagerID:this.projectManager,estimatedHours:this.estimateHours} 
    this.projectService.addProject(project).subscribe(resp=>{
      if(resp.status == 200){
        //navigate list Project
        this.toastrService.success("",resp.msg,{timeOut:3000})
        this.router.navigateByUrl("/admin/listproject")
      }else{
        this.toastrService.error("",resp.msg,{timeOut:3000})
      }
      
    })

  }

}
