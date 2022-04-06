import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/session.service';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private roleService: RoleService,private sessionService:SessionService,private toastrService:ToastrService, private route:Router) { }


  firstName: string = ""
  email: string = ""
  password: string = ""
  role: string = ""
  gender: string = ""
  contactNumber: string = ""
  roles: Array<any> = []

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
        this.route.navigateByUrl("/admin/listuser")
      }
    })
  }
}