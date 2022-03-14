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
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { ListModuleComponent } from './admin/list-module/list-module.component';
import { ListProjectComponent } from './admin/list-project/list-project.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { ListTaskComponent } from './admin/list-task/list-task.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
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
      { path: "edituser/:userId", component: EditUserComponent },
      { path: "addproject", component: AddProjectComponent },
      { path: "listproject", component: ListProjectComponent },
      { path: "editproject/:projectId", component: EditProjectComponent },
      { path: "add-module", component: AddModuleComponent },
      { path: "list-module", component: ListModuleComponent },
      { path: "edit-module/:moduleId", component: EditModuleComponent },
      { path: "add-task", component: AddTaskComponent },
      { path: "list-task", component: ListTaskComponent },
      { path: "edit-task/:taskId", component: EditTaskComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }