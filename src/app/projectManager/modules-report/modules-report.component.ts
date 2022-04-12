import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';
import { RoleService } from 'src/app/admin/role.service';

@Component({
  selector: 'app-modules-report',
  templateUrl: './modules-report.component.html',
  styleUrls: ['./modules-report.component.css']
})
export class ModulesReportComponent implements OnInit {

  constructor(private roleService: RoleService, private projectService: ProjectService) { }
  
  statusId: string = ""
  status: Array<any> = []
  modules: Array<any> = []
  ngOnInit(): void {
    this.roleService.getAllStatus().subscribe(resp => {
      this.status = resp.data      
    })
  }

  getModulesbyStatus() {
    //console.log(this.statusId);
    this.roleService.getModulesbyStatus(this.statusId).subscribe(resp => {
      //console.log(resp);
      this.modules = resp.data
    })
  }

}
