import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../../project.service';
import { RoleService } from '../../role.service';

@Component({
  selector: 'app-bug-report',
  templateUrl: './bug-report.component.html',
  styleUrls: ['./bug-report.component.css']
})
export class BugReportComponent implements OnInit {
  statusId:string=""
  status:Array<any>=[]
  bugs:Array<any>=[]
  constructor(private roleService: RoleService, private projectService: ProjectService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.roleService.getAllBugStatus().subscribe(resp => {
      this.status = resp.data
      console.log(resp);
      
    })
  }
  getBugbystatus(){

  }

}
