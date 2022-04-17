import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';

@Component({
  selector: 'app-edit-bug',
  templateUrl: './edit-bug.component.html',
  styleUrls: ['./edit-bug.component.css']
})
export class EditBugComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: Router, private activatedRoute: ActivatedRoute, private toastrService: ToastrService) { }
  bugId: string = ""
  bugName: string = ""
  bugDescription: string = ""
  risk: string = ""
  ngOnInit(): void {
    this.bugId = this.activatedRoute.snapshot.params['bugId']
    //console.log(this.bugId);
    this.projectService.getBugById(this.bugId).subscribe(resp => {
      //console.log(resp);
      this.bugName = resp.data[0].bugName
      this.bugDescription = resp.data[0].description
      this.risk = resp.data[0].risk
    })
  }

  update() {
    let bug = { bugId:this.bugId,bugName: this.bugName, description: this.bugDescription, risk: this.risk }
    this.projectService.updatebugs(bug).subscribe(resp => {
      if (resp.status == 200) {
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
        this.router.navigateByUrl("/tester/list-bug")
      } else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }

    })

  }

}
