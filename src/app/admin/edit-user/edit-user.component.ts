import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userId:string = ""
  firstName:string = ""
  constructor(private activateRoute:ActivatedRoute,private roleService:RoleService,private toastrService:ToastrService,private router:Router) { }

  ngOnInit(): void {
      this.userId = this.activateRoute.snapshot.params['userId']    
      this.getUserByRoleId() 
  }

  getUserByRoleId(){
    this.roleService.getUserById(this.userId).subscribe(resp=>{
      this.firstName = resp.data.firstName 

    })
  }

  updateUser(){
    let user = {
      userId : this.userId,
      firstName : this.firstName
    }
    this.roleService.updateUser(user).subscribe(resp=>{
      if(resp.status == 200){
          this.toastrService.success("",resp.msg,{timeOut:3000})
          this.router.navigateByUrl("/listuser")
        }else{
        this.toastrService.error("",resp.msg,{timeOut:3000})
      }
    })
  }
}
