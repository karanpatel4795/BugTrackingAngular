import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddModuleComponent } from './admin/add-module/add-module.component';
import { AddProjectComponent } from './admin/add-project/add-project.component';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { AddTaskComponent } from './admin/add-task/add-task.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin/admin.component';
import { EditModuleComponent } from './admin/edit-module/edit-module.component';
import { EditProjectComponent } from './admin/edit-project/edit-project.component';
import { EditRoleComponent } from './admin/edit-role/edit-role.component';
import { EditTaskComponent } from './admin/edit-task/edit-task.component';
import { ListModuleComponent } from './admin/list-module/list-module.component';
import { ListProjectTeamComponent } from './admin/list-project-team/list-project-team.component';
import { ListProjectComponent } from './admin/list-project/list-project.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { ListTaskComponent } from './admin/list-task/list-task.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { PendingApprovalComponent } from './admin/pending-approval/pending-approval.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AddModulesComponent } from './projectManager/add-modules/add-modules.component';
import { AddUsersComponent } from './projectManager/add-users/add-users.component';
import { CompletedProjectsComponent } from './projectManager/completed-projects/completed-projects.component';
import { EditModulesComponent } from './projectManager/edit-modules/edit-modules.component';
import { ListModulesComponent } from './projectManager/list-modules/list-modules.component';
import { ListProjectsComponent } from './projectManager/list-projects/list-projects.component';
import { ListUsersComponent } from './projectManager/list-users/list-users.component';
import { PendingProjectsComponent } from './projectManager/pending-projects/pending-projects.component';
import { ProjectManagerDashboardComponent } from './projectManager/project-manager-dashboard/project-manager-dashboard.component';
import { ProjectManagerComponent } from './projectManager/project-manager/project-manager.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "forgotpassword", component: ForgotpasswordComponent },
  { path: "changepassword", component: ChangepasswordComponent },
  { path: "logout", component: LogoutComponent },
  {
    path: "admin", component: AdminComponent, children: [
      { path: "admin-dashboard", component: AdminDashboardComponent },
      { path: "adduser", component: AddUserComponent },
      { path: "addrole", component: AddRoleComponent },
      { path: "listrole", component: ListRoleComponent },
      { path: "editrole/:roleId", component: EditRoleComponent },
      { path: "adduser", component: AddUserComponent },
      { path: "listuser", component: ListUserComponent },
      { path: "pending-approval", component: PendingApprovalComponent },
      { path: "addproject", component: AddProjectComponent },
      { path: "listproject", component: ListProjectComponent },
      { path: "editproject/:projectId", component: EditProjectComponent },
      { path: "add-module", component: AddModuleComponent },
      { path: "list-module", component: ListModuleComponent },
      { path: "edit-module/:moduleId", component: EditModuleComponent },
      { path: "add-task", component: AddTaskComponent },
      { path: "list-task", component: ListTaskComponent },
      { path: "edit-task/:taskId", component: EditTaskComponent },
      { path: "list-projectTeam", component:ListProjectTeamComponent },
    ]
  },
  {
    path: "project-manager", component: ProjectManagerComponent, children: [
      { path: "project-manager-dashboard", component: ProjectManagerDashboardComponent },
      { path: "add-users", component: AddUsersComponent },
      { path: "list-users", component: ListUsersComponent },
      {path:"list-projects",component:ListProjectsComponent},
      {path:"pending-projects",component:PendingProjectsComponent},
      {path:"completed-projects",component:CompletedProjectsComponent},
      { path: "add-modules", component:AddModulesComponent },
      { path: "list-modules", component: ListModulesComponent },
      { path: "edit-modules/:modulesId", component:EditModulesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }