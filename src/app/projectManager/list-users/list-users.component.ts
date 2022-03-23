import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/admin/role.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: Array<any> = []
  constructor(private roleService: RoleService, private toastrService: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.getAllUser()
  }
  deleteUser(userId: any) {
    this.roleService.deleteUser(userId).subscribe(resp => {
      if (resp.status = 200) {
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
        this.getAllUser()
      }
      else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }

  disableUser(userId: any) {
    console.log(userId);
    
    let user = { userId: userId }
    this.roleService.disableUser(user).subscribe(resp => {
      if (resp.status = 200) {
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
        this.getAllUser()
      }
      else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }

  getAllUser() {
    this.roleService.getAllUser().subscribe(resp => {
      console.log(resp);
      this.users = resp.data
    })
  }
}
