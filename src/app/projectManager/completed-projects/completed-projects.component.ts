import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/admin/project.service';

@Component({
  selector: 'app-completed-projects',
  templateUrl: './completed-projects.component.html',
  styleUrls: ['./completed-projects.component.css']
})
export class CompletedProjectsComponent implements OnInit {

  projectManagerId: string = ""
  projects: Array<any> = []
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getAllCompletedProject()
  }

  getAllCompletedProject() {
    this.projectManagerId = localStorage.getItem("userId") as string

        
    this.projectService.getAllCompletedProject(this.projectManagerId).subscribe(resp => {
      this.projects = resp.data
  
    })
  }


}
