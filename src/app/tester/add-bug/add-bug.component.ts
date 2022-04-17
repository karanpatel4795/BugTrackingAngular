import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';

@Component({
  selector: 'app-add-bug',
  templateUrl: './add-bug.component.html',
  styleUrls: ['./add-bug.component.css']
})
export class AddBugComponent implements OnInit {

  constructor(private projectService:ProjectService,private router:Router,private toastrService:ToastrService) { }
  bugName:string =""
  bugDescription:string=""
  risk:string=""
  ngOnInit(): void {
    }

  addBug(){
    let bug = {bugName:this.bugName,description:this.bugDescription,risk:this.risk} 
    this.projectService.addBug(bug).subscribe(resp=>{
      if(resp.status == 200){
        this.toastrService.success("",resp.msg,{timeOut:3000})
        this.router.navigateByUrl("/tester/list-bug")
      }else{
        this.toastrService.error("",resp.msg,{timeOut:3000})
      }
      
    })

  }

}
