import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from '../admin/role.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  //instance variable
  firstName:string=""
  email:string=""
  password:string=""
  role:string=""
  roles:Array<any>=[]

  constructor(private sessionService:SessionService,private roleService:RoleService,private toastrService:ToastrService, private route:Router){ }

  ngOnInit():void{
    this.roleService.getRoles().subscribe(resp => {
      this.roles = resp.data
    })
  }
  adduser(){
    let user = {firstName:this.firstName,email:this.email,password:this.password,role:"6228efec12209b8603f2d882"}
    this.sessionService.addUser(user).subscribe(resp=>{
      if(resp.status==-1){
      this.toastrService.error("",resp.msg,{timeOut:3000});
      }
      else{
        this.toastrService.success("",resp.msg,{timeOut:3000});
        this.route.navigateByUrl("/login")
      }
    })
  }
}
