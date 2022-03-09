import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(private roleService:RoleService,private router:Router,private toastrService:ToastrService) { }
  projectName:string =""
  ngOnInit(): void {
  }

  addProject(){
    let project = {projectName:this.projectName} 
    this.roleService.addProject(project).subscribe(resp=>{
      if(resp.status == 200){
        //navigate list Project
        this.toastrService.success("",resp.msg,{timeOut:3000})
        this.router.navigateByUrl("/listproject")
      }else{

      }
      
    })

  }

}
