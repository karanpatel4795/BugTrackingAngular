import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-bug-found',
  templateUrl: './bug-found.component.html',
  styleUrls: ['./bug-found.component.css']
})
export class BugFoundComponent implements OnInit {

  bugFound: Array<any> = []
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAllFoundedBugs().subscribe(resp=>{
      console.log(resp);
      
      this.bugFound = resp.data
    })
  }
}
