import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpClient:HttpClient) { }
  ngInit():void{

  }
  addRole(role:any):Observable<any>{
    //console.log(role);
    //node API
    return this.httpClient.post("http://localhost:3000/roles",role)

  }  
  getAllRoles():Observable<any>{
    return this.httpClient.get("http://localhost:3000/roles")
  }
  deleteRole(roleId:any):Observable<any>{
    return this.httpClient.delete("http://localhost:3000/roles/"+roleId)
  }
  getRoleById(roleId:any):Observable<any>{
    return this.httpClient.get("http://localhost:3000/roles/"+roleId)
  }
  updateRole(role:any):Observable<any>{
    return this.httpClient.put("http://localhost:3000/roles",role)
  }
  getAllUsers():Observable<any>{
    return this.httpClient.get("http://localhost:3000/users")
  }
  deleteUser(userId:any):Observable<any>{
    return this.httpClient.delete("http://localhost:3000/users/"+userId)
  }
  getUserById(userId:any):Observable<any>{
    return this.httpClient.get("http://localhost:3000/users/"+userId)
  }
  updateUser(user:any):Observable<any>{
    return this.httpClient.put("http://localhost:3000/users",user)
  }
  addProject(project:any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/projects",project)
  }
  getAllProject():Observable<any>{
    return this.httpClient.get("http://localhost:3000/projects")
  }
  deleteProject(projectId:any):Observable<any>{
    return this.httpClient.delete("http://localhost:3000/projects/"+projectId)
  }  
  getotp():Observable<any>{
    return this.httpClient.get("http://localhost:3000/roles")
  }
}
