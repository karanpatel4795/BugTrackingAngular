import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddModuleComponent } from './admin/add-module/add-module.component';
import { AddProjectTeamComponent } from './admin/add-project-team/add-project-team.component';
import { AddProjectComponent } from './admin/add-project/add-project.component';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { AddTaskComponent } from './admin/add-task/add-task.component';
import { AddTeamMemberComponent } from './admin/add-team-member/add-team-member.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AssignModuleComponent } from './admin/assign-module/assign-module.component';
import { AssignTaskComponent } from './admin/assign-task/assign-task.component';
import { CompletedProjectComponent } from './admin/completed-project/completed-project.component';
import { EditModuleComponent } from './admin/edit-module/edit-module.component';
import { EditProjectComponent } from './admin/edit-project/edit-project.component';
import { EditRoleComponent } from './admin/edit-role/edit-role.component';
import { EditTaskComponent } from './admin/edit-task/edit-task.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { ListModuleComponent } from './admin/list-module/list-module.component';
import { ListProjectTeamComponent } from './admin/list-project-team/list-project-team.component';
import { ListProjectComponent } from './admin/list-project/list-project.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { ListTaskComponent } from './admin/list-task/list-task.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { PendingApprovalComponent } from './admin/pending-approval/pending-approval.component';
import { PendingProjectComponent } from './admin/pending-project/pending-project.component';
import { BugReportComponent } from './admin/reports/bug-report/bug-report.component';
import { DevloperReportComponent } from './admin/reports/devloper-report/devloper-report.component';
import { ProjectReportComponent } from './admin/reports/project-report/project-report.component';
import { TaskReportComponent } from './admin/reports/task-report/task-report.component';
import { UserReportComponent } from './admin/reports/user-report/user-report.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { DeveloperDashboardComponent } from './developer/developer-dashboard/developer-dashboard.component';
import { DeveloperListProjectsComponent } from './developer/developer-list-projects/developer-list-projects.component';
import { DeveloperViewTaskComponent } from './developer/developer-view-task/developer-view-task.component';
import { DeveloperComponent } from './developer/developer/developer.component';
import { ListAllTaskComponent } from './developer/list-all-task/list-all-task.component';
import { ListPendingTaskComponent } from './developer/list-pending-task/list-pending-task.component';
import { SubmitTaskComponent } from './developer/submit-task/submit-task.component';
import { TesterListAllTaskComponent } from './tester/tester-list-all-task/tester-list-all-task.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AddModulesComponent } from './projectManager/add-modules/add-modules.component';
import { AddTasksComponent } from './projectManager/add-tasks/add-tasks.component';
import { AddTeamMembersComponent } from './projectManager/add-team-members/add-team-members.component';
import { AddUsersComponent } from './projectManager/add-users/add-users.component';
import { AssignTasksComponent } from './projectManager/assign-tasks/assign-tasks.component';
import { CompletedProjectsComponent } from './projectManager/completed-projects/completed-projects.component';
import { EditModulesComponent } from './projectManager/edit-modules/edit-modules.component';
import { EditProjectsComponent } from './projectManager/edit-projects/edit-projects.component';
import { ListModulesComponent } from './projectManager/list-modules/list-modules.component';
import { ListProjectsComponent } from './projectManager/list-projects/list-projects.component';
import { ListTasksComponent } from './projectManager/list-tasks/list-tasks.component';
import { ListUsersComponent } from './projectManager/list-users/list-users.component';
import { ModulesReportComponent } from './projectManager/modules-report/modules-report.component';
import { PendingProjectsComponent } from './projectManager/pending-projects/pending-projects.component';
import { ProjectManagerDashboardComponent } from './projectManager/project-manager-dashboard/project-manager-dashboard.component';
import { ProjectManagerComponent } from './projectManager/project-manager/project-manager.component';
import { TasksReportComponent } from './projectManager/tasks-report/tasks-report.component';
import { ViewTeamComponent } from './projectManager/view-team/view-team.component';
import { SignupComponent } from './signup/signup.component';
import { AddBugComponent } from './tester/add-bug/add-bug.component';
import { EditBugComponent } from './tester/edit-bug/edit-bug.component';
import { ListBugComponent } from './tester/list-bug/list-bug.component';
import { TesterDashboardComponent } from './tester/tester-dashboard/tester-dashboard.component';
import { TesterComponent } from './tester/tester/tester.component';
import { TestTaskComponent } from './tester/test-task/test-task.component';
import { BugAssignComponent } from './tester/bug-assign/bug-assign.component';
import { TesterListPendingTaskComponent } from './tester/tester-list-pending-task/tester-list-pending-task.component';
import { TesterListAllBugsComponent } from './tester/tester-list-all-bugs/tester-list-all-bugs.component';
import { ListBugTaskComponent } from './developer/list-bug-task/list-bug-task.component';


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
      { path: "list-projectTeam", component: ListProjectTeamComponent },
      { path: "pending-project", component: PendingProjectComponent },
      { path: "competed-project", component: CompletedProjectComponent },
      { path: "change-password", component: ChangePasswordComponent },//panel -> change password
      { path: "forgot-password", component: ForgotPasswordComponent },
      { path: "add-projectTeam", component: AddProjectTeamComponent },
      { path: "list-projectTeam", component: ListProjectTeamComponent },
      { path: "addTeamMember/:projectId", component: AddTeamMemberComponent },
      { path: "assignTask/:user", component: AssignTaskComponent },
      { path: "assignModule/:user", component: AssignModuleComponent },
      //reports
      { path: "user-report", component: UserReportComponent },
      { path: "project-report", component: ProjectReportComponent },
      { path: "task-report", component: TaskReportComponent },
      { path: "developer-report", component: DevloperReportComponent },
      { path: "bug-report", component: BugReportComponent }
    ]
  },
  {
    path: "project-manager", component: ProjectManagerComponent, children: [
      { path: "project-manager-dashboard", component: ProjectManagerDashboardComponent },
      { path: "add-users", component: AddUsersComponent },
      { path: "list-users", component: ListUsersComponent },
      { path: "list-projects", component: ListProjectsComponent },
      { path: "edit-projects/:projectId", component: EditProjectsComponent },
      { path: "pending-projects", component: PendingProjectsComponent },
      { path: "completed-projects", component: CompletedProjectsComponent },
      { path: "add-modules", component: AddModulesComponent },
      { path: "list-modules", component: ListModulesComponent },
      { path: "edit-modules/:moduleId", component: EditModulesComponent },
      { path: "viewTeam/:projectId", component: ViewTeamComponent },
      { path: "addTeamMember/:projectId", component: AddTeamMembersComponent },
      { path: "assign-Tasks/:user", component: AssignTasksComponent },
      { path: "add-tasks", component: AddTasksComponent },
      { path: "list-tasks", component: ListTasksComponent },
      { path: "modules-report", component: ModulesReportComponent },
      { path: "tasks-report", component: TasksReportComponent },
      { path: "change-Password", component: ChangePasswordComponent },
      { path: "list-projects", component: DeveloperListProjectsComponent }
    ]
  },
  {
    path: "developer", component: DeveloperComponent, children: [
      { path: "developer-dashboard", component: DeveloperDashboardComponent },
      { path: "change-password", component: ChangePasswordComponent },
      { path: "list-projects", component: DeveloperListProjectsComponent },
      { path: "viewTask/:projectId", component: DeveloperViewTaskComponent },
      { path: "submit-task/:taskId", component: SubmitTaskComponent },
      { path: "list-all-task", component: ListAllTaskComponent },
      { path: "list-pending-task", component: ListPendingTaskComponent },
      { path: "list-bug-task", component: ListBugTaskComponent }
    ]
  },
  {
    path: "tester", component: TesterComponent, children: [
      { path: "tester-dashboard", component: TesterDashboardComponent },
      { path: "change-password", component: ChangePasswordComponent },
      { path: "add-bug", component: AddBugComponent },
      { path: "list-bug", component: ListBugComponent },
      { path: "edit-bug/:bugId", component: EditBugComponent },
      { path: "list-all-task", component: TesterListAllTaskComponent },
      { path: "test-task/:taskId", component: TestTaskComponent },
      { path: "bug-Assign/:taskId", component: BugAssignComponent },
      { path: "list-pending-task", component: TesterListPendingTaskComponent },
      { path: "list-all-bugs", component: TesterListAllBugsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }