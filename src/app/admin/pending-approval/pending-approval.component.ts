import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-pending-approval',
  templateUrl: './pending-approval.component.html',
  styleUrls: ['./pending-approval.component.css']
})
export class PendingApprovalComponent implements OnInit {
  pendingusers:Array<any>=[]
  users: Array<any> = []
  constructor(private roleService: RoleService, private toastrService: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.roleService.getPendingUsers().subscribe(resp => {
      this.pendingusers = resp.data
      //console.log(resp)
    })
  }
  approvalUser(userId:any){
   // console.log(userId)
    let user = {userId:userId}
    this.roleService.approveUser(user).subscribe(resp=>{
      if(resp.status=200){
        this.toastrService.success("",resp.msg,{timeOut:3000})
        this.route.navigateByUrl("/admin/listuser")
      }
      else{
        this.toastrService.error("",resp.msg,{timeOut:3000})
      }
    })
  }
  deleteUser(userId:any){
    this.roleService.deleteUser(userId).subscribe(resp=>{
      if(resp.status=200){
        this.toastrService.success("",resp.msg,{timeOut:3000})
        this.route.navigateByUrl("/admin/listuser")
      }
      else{
        this.toastrService.error("",resp.msg,{timeOut:3000})
      }
    })
  }

}
