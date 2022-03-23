import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/admin/role.service';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  firstName:string=""
  email:string=""
  password:string=""
  role:string=""
  gender:string=""
  contactNumber:string=""
  constructor(private sessionService:SessionService,private roleService:RoleService,private toastrService:ToastrService, private route:Router) { }

  ngOnInit(): void {
  }

  adduser(){
    let user = {firstName:this.firstName,email:this.email,password:this.password,role:this.role,gender:this.gender,contactNumber:this.contactNumber}
    //console.log(this.role);
    
    this.sessionService.addUser(user).subscribe(resp=>{
      if(resp.status==-1){
      this.toastrService.error("",resp.msg,{timeOut:3000});
      }
      else{
        this.toastrService.success("",resp.msg,{timeOut:3000});
        this.route.navigateByUrl("/project-manager/list-users")
      }
    })
  }

}
