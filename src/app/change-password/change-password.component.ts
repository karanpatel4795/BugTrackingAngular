import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { RoleService } from '../admin/role.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  userId: string = ""
  userRole: string = ""
  cps: string = ""
  nps: string = ""
  cnps: string = ""
  constructor(private roleService: RoleService, private tsService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("email") as string
    this.roleService.getUsersById(this.userId).subscribe(resp => {
      this.userRole = resp.data[0].role
    })
  }

  updatePassword() {
    let password = {
      email: this.userId,
      cps: this.cps,
      nps: this.nps,
      cnps: this.cnps
    }
    this.roleService.updatePassword(password).subscribe(resp => {
      if (resp.status == 200) {
        this.tsService.success("", resp.msg, { timeOut: 3000 })
        if (this.userRole == "6228efe612209b8603f2d880") {
          this.router.navigateByUrl("/admin/admin-dashboard")
        }
        else if (this.userRole == "6228f0b812209b8603f2d88c") {
          this.router.navigateByUrl("/project-manager/project-manager-dashboard")
        }
        else if (this.userRole == "6228efec12209b8603f2d882") {
          this.router.navigateByUrl("/developer/developer-dashboard")
        }
        else if (this.userRole == "6228eff112209b8603f2d884") {
          this.router.navigateByUrl("/tester/tester-dashboard")
        }
      } else {
        this.tsService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }
}
