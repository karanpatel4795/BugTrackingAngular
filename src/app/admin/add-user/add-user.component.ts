import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/session.service';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private roleService: RoleService,private sessionService:SessionService,private toastrService:ToastrService) { }


  firstName: string = ""
  email: string = ""
  password: string = ""
  role: string = ""
  gender: string = ""
  contactNumber: string = ""
  roles: Array<any> = []

  ngOnInit(): void {
    this.getAllRoles()
  }

  addUser() {
    let user = {
      "firstName":this.firstName,
      "email":this.email,
      "password":this.password,
      "gender":this.gender,
      "role":this.role,
      "contactNumber":this.contactNumber
    }
    this.sessionService.addUser(user).subscribe(resp=>{
      if(resp.status == 200){
          this.toastrService.success("",resp.msg,{timeOut:3000})
      }else{
        this.toastrService.error("",resp.msg,{timeOut:3000})
      }
    })
 
  }

  getAllRoles() {
    this.roleService.getAllRoles().subscribe(resp => {
      this.roles = resp.data
      console.log(this.roles);

    })
  }

}