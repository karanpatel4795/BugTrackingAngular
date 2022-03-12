import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.css']
})
export class ListModuleComponent implements OnInit {

  modules: Array<any> = []
  constructor(private projectService: ProjectService, private toastrService: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.getAllModules()
  }
  getAllModules() {
    this.projectService.getAllModule().subscribe(resp => {
      this.modules = resp.data
    })
  }
  deleteModule(moduleId: any) {
    this.projectService.deleteModule(moduleId).subscribe(resp => {
     console.log(resp)
      if (resp.status = 200) {
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
        this.getAllModules()
      }
      else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }

  editModule(moduleId: any) {
    this.route.navigateByUrl("/admin/edit-module/" + moduleId)
  }
  
}
