import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from '../admin/role.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  userId: string = ""
  cps: string = ""
  nps: string = ""
  cnps: string = ""
  constructor(private roleService: RoleService, private tsService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("email") as string
  }

  updatePassword() {
    let password = {
      userId: this.userId,
      cps: this.cps,
      nps: this.nps,
      cnps: this.cnps
    }
    this.roleService.updatePassword(password).subscribe(resp => {
      if (resp.status == 200) {
        this.tsService.success("", resp.msg, { timeOut: 3000 })
        this.router.navigateByUrl("/admin/admin-dashboard")
      } else {
        this.tsService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }
}
