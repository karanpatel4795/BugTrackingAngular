import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

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
    this.roleService.getAllUsers().subscribe(resp => {
      //console.log(resp);
      this.users = resp.data
    })
  }

}
