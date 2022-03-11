import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  email: string = ""
  constructor(private sessionService: SessionService, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }
  forgotpassword() {
    let user = { email: this.email }
    this.sessionService.sendOTP(user).subscribe(resp => {
      if (resp.status == -1) {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      } else {
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
        localStorage.setItem("UserEmail", this.email)
        this.router.navigateByUrl("/changepassword")
      }
    })
  }
}