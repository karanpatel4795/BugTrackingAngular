import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-add-team-member',
  templateUrl: './add-team-member.component.html',
  styleUrls: ['./add-team-member.component.css']
})
export class AddTeamMemberComponent implements OnInit {
  projectId: string = ""
  project: Array<any> = []
  projectTitle: string = ""
  projectTeam: Array<any> = []
  projectManager: Array<any> = []
  developer: Array<any> = []
  tester: Array<any> = []
  role: string = ""

  managers: Array<any> = []
  developers: Array<any> = []
  testers: Array<any> = []

  constructor(private projectService: ProjectService, private toastrService: ToastrService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectId = this.activatedRoute.snapshot.params['projectId']

    this.projectService.getProjectTitle(this.projectId).subscribe(resp=>{
      this.projectTitle = resp.data[0].projectTitle
      //console.log(this.projectTitle);
      
      
    })
    this.projectService.getAllManagers().subscribe(resp => {
      this.managers = resp.data
    })
    this.projectService.getAllDeveloper().subscribe(resp => {
      this.developers = resp.data
    })
    this.projectService.getAllTester().subscribe(resp => {
      this.testers = resp.data
    })
  }
  addProjectTeam() {
      for (let i = 0; i < this.developer.length; i++) {
      this.projectService.addProjectTeam({
        projectId: this.projectId,
        projectTeamMember: this.developer[i],
        role: "6228efec12209b8603f2d882"
      }).subscribe()
    }

    for (let i = 0; i < this.projectManager.length; i++) {
      this.projectService.addProjectTeam({
        projectId: this.projectId,
        projectTeamMember: this.projectManager[i],
        role: "6228f0b812209b8603f2d88c"
      }).subscribe()
    }

    for (let i = 0; i < this.tester.length; i++) {
      this.projectService.addProjectTeam({
        projectId: this.projectId,
        projectTeamMember: this.tester[i],
        role: "6228eff112209b8603f2d884"
      }).subscribe()
    }
    this.router.navigateByUrl("/admin/list-projectTeam")


  }

}
