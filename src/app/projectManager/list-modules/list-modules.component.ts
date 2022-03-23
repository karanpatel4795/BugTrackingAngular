import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';

@Component({
  selector: 'app-list-modules',
  templateUrl: './list-modules.component.html',
  styleUrls: ['./list-modules.component.css']
})
export class ListModulesComponent implements OnInit {
  projectManagerId: string = ""
  modules: Array<any> = []
  constructor(private projectService: ProjectService, private toastrService: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.getAllModulesForProjectManager()
  }
  getAllModulesForProjectManager() {
    this.projectManagerId = localStorage.getItem("userId") as string
    this.projectService.getAllModulesForProjectManager(this.projectManagerId).subscribe(resp => {
      this.modules = resp.data
      //console.log(resp);

    })
  }
  deleteModule(moduleId: any) {
    this.projectService.deleteModule(moduleId).subscribe(resp => {
      if (resp.status = 200) {
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
        this.getAllModulesForProjectManager()
      }
      else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }

  editModule(moduleId: any) {
    this.route.navigateByUrl("/project-manager/edit-modules/" + moduleId)
  }
}
