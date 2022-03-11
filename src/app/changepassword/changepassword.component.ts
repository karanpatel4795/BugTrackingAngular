import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from '../admin/role.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  otp: string = ""
  pass: string = ""
  cpass: string = ""
  
  constructor(private roleService: RoleService,private toastrService:ToastrService,private router:Router,private sessioService:SessionService) { }
  email:string=""
  ngOnInit(): void {
    this.email = localStorage.getItem("UserEmail") as string
    //console.log(this.email)
  }
  changepassword() {
    //console.log(email)
    let user = {email:this.email,pass:this.pass,cpass:this.cpass,otp:this.otp}
    this.sessioService.otpVerification(user).subscribe(resp => {
      if (resp.status == -1) {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      } else {
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
        this.router.navigateByUrl("/login")
      }
    })     
  }
}

