import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { ProjectService } from 'src/app/admin/project.service';

@Component({
  selector: 'app-tester-list-all-bugs',
  templateUrl: './tester-list-all-bugs.component.html',
  styleUrls: ['./tester-list-all-bugs.component.css']
})
export class TesterListAllBugsComponent implements OnInit {

  projectId: string = ""
  moduleId: string = ""
  devId: string = ""
  projects: Array<any> = []
  priority: string = ""
  bugList: Array<any> = []
  projectTitle: string = ""
  moduleName: string = ""
  bugStatus: string = ""
  constructor(private projectService: ProjectService) { }


  ngOnInit(): void {
    this.devId = localStorage.getItem("userId") as string
    this.projectService.getBugforTester(this.devId).subscribe(resp => {
      //console.log(resp);
      this.bugList = resp.data
      for (let i = 0; i < this.bugList.length; i++) {
        this.projectService.getProjectById(resp.data[i].taskId.projectId).subscribe(resp => {
          this.projectTitle = resp.data.projectTitle
        })
        this.projectService.getModuleById(resp.data[i].taskId.moduleId).subscribe(resp=>{
          this.moduleName = resp.data.moduleName
        })
        this.projectService.getStatusName(resp.data[i].taskId.bugStatus).subscribe(resp=>{
          //console.log(resp);
          this.bugStatus=resp.data[0].statusName
          
        })
      }
    })

  }

}
