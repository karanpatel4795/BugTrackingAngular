import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient:HttpClient) { }
  ngInit():void{

  }
  //----------------------------- Project ---------------------------------
  addProject(project:any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/projects",project)
  }
  getAllProject():Observable<any>{
    return this.httpClient.get("http://localhost:3000/projects")
  }
  deleteProject(projectId:any):Observable<any>{
    return this.httpClient.delete("http://localhost:3000/projects/"+projectId)
  }  
  getAllManager():Observable<any>{
    return this.httpClient.get("http://localhost:3000/managers")
  }
  getProjectById(projectId:any):Observable<any>{
    return this.httpClient.get("http://localhost:3000/projects/"+projectId)
  }
  updateProject(project:any):Observable<any>{
    return this.httpClient.put("http://localhost:3000/projects",project)
  }
  getAllPriority():Observable<any>{
    return this.httpClient.get("http://localhost:3000/priority")
  }

  //-------------------------- modules --------------------------------------
  addModule(module:any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/modules",module)
  }
  getAllModule():Observable<any>{
    return this.httpClient.get("http://localhost:3000/modules")
  }
  deleteModule(moduleId:any):Observable<any>{
    return this.httpClient.delete("http://localhost:3000/modules/"+moduleId)
  }  
  getModuleById(moduleId:any):Observable<any>{
    return this.httpClient.get("http://localhost:3000/modules/"+moduleId)
  }
  updateModule(module:any):Observable<any>{
    return this.httpClient.put("http://localhost:3000/modules",module)
  }
  getModulebyproject(project:any):Observable<any>{
    return this.httpClient.get("http://localhost:3000/modules/"+project)
  }

  //------------------------------- Task ----------------------------------
  addTask(task:any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/tasks",task)
  }
  getAllTask():Observable<any>{
    return this.httpClient.get("http://localhost:3000/tasks")
  }
  deleteTask(taskId:any):Observable<any>{
    return this.httpClient.delete("http://localhost:3000/tasks/"+taskId)
  } 
  getTaskById(taskId:any):Observable<any>{
    return this.httpClient.get("http://localhost:3000/tasks/"+taskId)
  }
  updateTask(task:any):Observable<any>{
    return this.httpClient.put("http://localhost:3000/tasks",task)
  } 
}
