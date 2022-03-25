import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/session.service';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email: string = ""
  otp: string = ""
  pass: string = ""
  cpass: string = ""
  constructor(private sessionService: SessionService, private tsService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.email = localStorage.getItem("email") as string
    //console.log(this.email);
    let user = { email: this.email }
    //console.log(user);

    this.sessionService.sendOTP(user).subscribe(resp => {
      if (resp.status == -1) {
        this.tsService.error("", resp.msg, { timeOut: 3000 })
      } else {
        this.tsService.success("", resp.msg, { timeOut: 3000 })
      }
    })
  }

  updatePassword() {
    let user = { email: this.email, otp: this.otp, pass: this.pass, cpass: this.cpass }
    this.sessionService.otpVerification(user).subscribe(resp => {

      if (resp.status == -1) {
        this.tsService.error("", resp.msg, { timeOut: 3000 })
      } else {
        this.tsService.success("", resp.msg, { timeOut: 3000 })
        this.router.navigateByUrl("/admin/admin-dashboard")
      }
    })
  }
}
