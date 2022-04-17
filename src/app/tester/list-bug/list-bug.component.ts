import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';

@Component({
  selector: 'app-list-bug',
  templateUrl: './list-bug.component.html',
  styleUrls: ['./list-bug.component.css']
})
export class ListBugComponent implements OnInit {

  bugs: Array<any> = []
  constructor(private projectService: ProjectService, private toastrService: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.getAllBugs()
  }
  getAllBugs() {
    this.projectService.getAllBugs().subscribe(resp => {
     //console.log(resp)
      this.bugs = resp.data
    })
  }
  deleteTask(bugId: any) {
    this.projectService.deleteBug(bugId).subscribe(resp => {
      if (resp.status = 200) {
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
        this.getAllBugs()
      }
      else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }

  editTask(bugId: any) {
    this.route.navigateByUrl("/tester/edit-bug/"+bugId)
  }

}
