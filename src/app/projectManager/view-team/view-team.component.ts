import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css']
})
export class ViewTeamComponent implements OnInit {
  projectId: string = ""
  projectTeam: Array<any> = []
  constructor(private activatedRouter: ActivatedRoute, private projectService: ProjectService, private toastrService: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.projectId = this.activatedRouter.snapshot.params['projectId']
    this.getProjectTeambyProject()
  }
  getProjectTeambyProject() {
    this.projectService.getProjectTeambyProject(this.projectId).subscribe(resp => {
      this.projectTeam = resp.data
      console.log(resp);
      
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
      this.route.navigateByUrl("/project-manager/addTeamMember/" + this.projectId)
  }
  assignTask(user: any) {
    //console.log(user);
    if (user.role == "6228efec12209b8603f2d882") {
      localStorage.setItem("projectId", this.projectId)
      this.route.navigateByUrl("/project-manager/assign-Tasks/" + user._id)
    }
    else {
      this.toastrService.error("", "Kindly Assign Task to Developer!", { timeOut: 3000 })
    }

  }

}
