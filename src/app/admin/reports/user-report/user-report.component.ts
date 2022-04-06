import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../../project.service';
import { RoleService } from '../../role.service';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.css']
})
export class UserReportComponent implements OnInit {

  constructor(private roleService:RoleService,private projectService: ProjectService, private router: Router, private toastrService: ToastrService) { }
  
  roleId: string = ""

  roles:Array<any> = []
  users: Array<any> = []
  ngOnInit(): void {
    this.roleService.getAllRoles().subscribe(resp=>{
      this.roles = resp.data
    })
  }
  deleteUser(userId: any) {
    this.roleService.deleteUser(userId).subscribe(resp => {
      if (resp.status = 200) {
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
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
      }
      else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }
  getUserbyRole(event:any){
    const role = event.target.value;
   // console.log(role);
    
    this.roleService.getUserbyRole(role).subscribe(resp => {
      this.users = resp.data
  })
  }

}
