import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = ""
  password: string = ""
  constructor(private sessionService: SessionService, private tsService: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    let user = { email: this.email, password: this.password }
    this.sessionService.authentication(user).subscribe(resp => {
      //console.log(resp);

      if (resp.status == 200) {
        this.tsService.success("", resp.msg, { timeOut: 3000 })
        //console.log(resp);
        //console.log(resp.data.role.roleName)
        localStorage.setItem("userId", resp.data._id)
        localStorage.setItem("firstName", resp.data.firstName)
        localStorage.setItem("email", resp.data.email)

        if (resp.data.role.roleName.toLowerCase() == "admin") {
          this.router.navigateByUrl("/admin/admin-dashboard")
        } else if (resp.data.role.roleName.toLowerCase() == "project manager") {
          this.router.navigateByUrl("/project-manager/project-manager-dashboard")
        } else if (resp.data.role.roleName.toLowerCase() == "tester") {
          this.router.navigateByUrl("/tester/tester-dashboard")
        } else if (resp.data.role.roleName.toLowerCase() == "developer") {
          this.router.navigateByUrl("/developer/developer-dashboard")
        }
        else {

        }

      } else {
        this.tsService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }

}