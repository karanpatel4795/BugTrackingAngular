import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }
  ngInit(): void {

  }
  //----------------------------- Project ---------------------------------
  addProject(project: any): Observable<any> {
    return this.httpClient.post("http://localhost:3000/projects", project)
  }
  getAllProject(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/projects")
  }
  deleteProject(projectId: any): Observable<any> {
    return this.httpClient.delete("http://localhost:3000/projects/" + projectId)
  }
  getAllManager(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/managers")
  }
  getProjectById(projectId: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/projects/" + projectId)
  }
  updateProject(project: any): Observable<any> {
    return this.httpClient.put("http://localhost:3000/projects", project)
  }
  getAllPriority(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/priority")
  }
  getAllPendingProjects(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/pendingProjects")
  }
  getAllCompletedProjects(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/completedProjects")
  }
  getAllDevs(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getAllDevs")
  }
  //-------------------------- modules --------------------------------------
  addModule(module: any): Observable<any> {
    return this.httpClient.post("http://localhost:3000/modules", module)
  }
  getAllModule(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/modules")
  }
  deleteModule(moduleId: any): Observable<any> {
    return this.httpClient.delete("http://localhost:3000/modules/" + moduleId)
  }
  deleteModules(moduleId: any): Observable<any> {
    return this.httpClient.delete("http://localhost:3000/deleteUserModules/" + moduleId)
  }
  getModuleById(moduleId: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/modules/" + moduleId)
  }
  updateModule(module: any): Observable<any> {
    return this.httpClient.put("http://localhost:3000/modules", module)
  }
  getModulebyproject(project: any): Observable<any> {
    console.log(project);
    
    return this.httpClient.get("http://localhost:3000/module/" + project)
  }

  //------------------------------- Task ----------------------------------
  addTask(task: any): Observable<any> {
    return this.httpClient.post("http://localhost:3000/tasks", task)
  }
  getAllTask(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/tasks")
  }
  deleteTask(taskId: any): Observable<any> {
    return this.httpClient.delete("http://localhost:3000/tasks/" + taskId)
  }
  getTaskById(taskId: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/tasks/" + taskId)
  }
  updateTask(task: any): Observable<any> {
    return this.httpClient.put("http://localhost:3000/tasks", task)
  }
  getTaskbyModule(moduleId: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getTaskbyModule/" + moduleId)
  }
  //-------------------- project Manager ------------------------
  getAllProjects(projectManagerId: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getAllprojects/" + projectManagerId)
  }
  getAllPendingProject(projectManagerId: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getAllPendingProject/" + projectManagerId)
  }
  getAllCompletedProject(projectManagerId: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getAllCompletedProject/" + projectManagerId)
  }
  getAllModulesForPM(projectManagerId: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getModulebyPM/" + projectManagerId)
  }


  //------------------------------- Project Team ----------------------------------
  getAllManagers(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getAllManagers")
  }
  getAllDeveloper(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getAllDeveloper")
  }
  getAllTester(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getAllTester")
  }

  addProjectTeam(project: any): Observable<any> {
    return this.httpClient.post("http://localhost:3000/projectTeams", project)
  }
  addTeamMember(project: any): Observable<any> {
    return this.httpClient.post("http://localhost:3000/addTeamMember", project)
  }
  // getAllprojectTeam(): Observable<any> {
  //   return this.httpClient.get("http://localhost:3000/projectTeams")
  // }
  getProjectTeambyProject(project: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/projectTeams/" + project)
  }
  disableUserForProject(user: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/disableUserForProject/" + user)
  }
  getProjectTitle(projectId: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getProjectTitle/" + projectId)
  }
  getTaskbyProject(projectId: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getTaskbyProject/" + projectId)
  }
  assignTask(task: any): Observable<any> {
    return this.httpClient.post("http://localhost:3000/taskusers", task)
  }
  getModulebyProject(projectId: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getModulebyProject/" + projectId)
  }
  assignModule(module: any): Observable<any> {
    return this.httpClient.post("http://localhost:3000/moduleusers", module)
  }
   //------------------------------- Developer ----------------------------------
   getProjectforDev(devId: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getProjectforDev/" + devId)
  }
  getModuleforDev(devId: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getModuleforDev/" + devId)
  }
  getPendingTaskforDev(devId: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getPendingTaskforDev/" + devId)
  }
}
