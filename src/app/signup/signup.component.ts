import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  //instance variable
  firstName:string=""
  email:string=""
  password:string=""

  constructor(private sessionService:SessionService){ }

  ngOnInit():void{
  }
  adduser(){
    console.log(this.firstName);
    console.log(this.email);
    console.log(this.password);

    let user = {"firstName":this.firstName,"email":this.email,"password":this.password,"role":"620dcb8fb06348c8cfc5811f"}
    this.sessionService.addUser(user).subscribe(resp=>{
      console.log(resp);
    })
  }
}
