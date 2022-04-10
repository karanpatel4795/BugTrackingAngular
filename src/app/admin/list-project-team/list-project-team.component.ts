import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-list-project-team',
  templateUrl: './list-project-team.component.html',
  styleUrls: ['./list-project-team.component.css']
})
export class ListProjectTeamComponent implements OnInit {
  projectId: string = ""
  status: string = ""
  button: string = ""
  projects: Array<any> = []
  projectTeam: Array<any> = []
  constructor(private projectService: ProjectService, private toastrService: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.projectService.getAllProject().subscribe(resp => {
      this.projects = resp.data
    })
  }

  getProjectTeambyProject() {
    // const project = event.target.value;
    // this.projectId = project 
    this.projectService.getProjectTeambyProject(this.projectId).subscribe(resp => {
      this.projectTeam = resp.data
    })
  }
  action(user: any) {
    this.projectService.disableUserForProject(user).subscribe(resp => {
      if (resp.status == 200) {
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
        this.getProjectTeambyProject();
      }
      else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }
  addMemberTeam() {
    if (this.projectId == "") {
      this.toastrService.error("", "Please Choose Project", { timeOut: 3000 })
    }
    else {
      this.route.navigateByUrl("/admin/addTeamMember/" + this.projectId)
    }
  }
}
