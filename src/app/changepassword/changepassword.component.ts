import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from '../admin/role.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  otp: string = ""
  pass: string = ""
  cpass: string = ""
  user:Array<any> = []
  constructor(private roleService: RoleService,private toastrService:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.roleService.getotp().subscribe(resp=>{
    let user =  resp.data 
    }) 
  }
  changepassword() {
    // if (this.pass = this.cpass) {
    //   let user = {pass: this.pass}
    //   this.roleService.sendOTP(user).subscribe(resp => {
    //     if (resp.status == -1) {
    //       this.toastrService.error("", resp.msg, { timeOut: 3000 })
    //     } else {
    //       this.toastrService.success("", resp.msg, { timeOut: 3000 })
    //       this.router.navigateByUrl("/changepassword")
    //     }
    //   })
    }
  }//if

