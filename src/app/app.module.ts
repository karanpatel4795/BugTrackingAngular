import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { EditRoleComponent } from './admin/edit-role/edit-role.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AddProjectComponent } from './admin/add-project/add-project.component';
import { ListProjectComponent } from './admin/list-project/list-project.component';
import { EditProjectComponent } from './admin/edit-project/edit-project.component';
import { AdminSlidebarComponent } from './admin/admin-slidebar/admin-slidebar.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { LogoutComponent } from './logout/logout.component';
import { AddModuleComponent } from './admin/add-module/add-module.component';
import { ListModuleComponent } from './admin/list-module/list-module.component';
import { EditModuleComponent } from './admin/edit-module/edit-module.component';
import { AddTaskComponent } from './admin/add-task/add-task.component';
import { ListTaskComponent } from './admin/list-task/list-task.component';
import { EditTaskComponent } from './admin/edit-task/edit-task.component';
import { ProjectManagerDashboardComponent } from './projectManager/project-manager-dashboard/project-manager-dashboard.component';
import { ProjectManagerComponent } from './projectManager/project-manager/project-manager.component';
import { ProjectManagerHeaderComponent } from './projectManager/project-manager-header/project-manager-header.component';
import { ProjectManagerSlidebarComponent } from './projectManager/project-manager-slidebar/project-manager-slidebar.component';
import { PendingApprovalComponent } from './admin/pending-approval/pending-approval.component';
import { AddUsersComponent } from './projectManager/add-users/add-users.component';
import { ListUsersComponent } from './projectManager/list-users/list-users.component';
import { ListProjectsComponent } from './projectManager/list-projects/list-projects.component';
import { PendingProjectsComponent } from './projectManager/pending-projects/pending-projects.component';
import { CompletedProjectsComponent } from './projectManager/completed-projects/completed-projects.component';
import { ListModulesComponent } from './projectManager/list-modules/list-modules.component';
import { EditModulesComponent } from './projectManager/edit-modules/edit-modules.component';
import { AddModulesComponent } from './projectManager/add-modules/add-modules.component';
import { ListProjectTeamComponent } from './admin/list-project-team/list-project-team.component';
import { PendingProjectComponent } from './admin/pending-project/pending-project.component';
import { CompletedProjectComponent } from './admin/completed-project/completed-project.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { AddProjectTeamComponent } from './admin/add-project-team/add-project-team.component';
import { UserReportComponent } from './admin/reports/user-report/user-report.component';
import { ProjectReportComponent } from './admin/reports/project-report/project-report.component';
import { TaskReportComponent } from './admin/reports/task-report/task-report.component';
import { DevloperReportComponent } from './admin/reports/devloper-report/devloper-report.component';
import { BugReportComponent } from './admin/reports/bug-report/bug-report.component';
import { AddTeamMemberComponent } from './admin/add-team-member/add-team-member.component';
import { AssignTaskComponent } from './admin/assign-task/assign-task.component';
import { AssignModuleComponent } from './admin/assign-module/assign-module.component';
import { ViewTeamComponent } from './projectManager/view-team/view-team.component';
import { AddTeamMembersComponent } from './projectManager/add-team-members/add-team-members.component';
import { EditProjectsComponent } from './projectManager/edit-projects/edit-projects.component';
import { AssignTasksComponent } from './projectManager/assign-tasks/assign-tasks.component';
import { AddTasksComponent } from './projectManager/add-tasks/add-tasks.component';
import { ListTasksComponent } from './projectManager/list-tasks/list-tasks.component';
import { ModulesReportComponent } from './projectManager/modules-report/modules-report.component';
import { TasksReportComponent } from './projectManager/tasks-report/tasks-report.component';
import { DeveloperComponent } from './developer/developer/developer.component';
import { DeveloperDashboardComponent } from './developer/developer-dashboard/developer-dashboard.component';
import { DeveloperHeaderComponent } from './developer/developer-header/developer-header.component';
import { DeveloperSlidebarComponent } from './developer/developer-slidebar/developer-slidebar.component';
import { DeveloperListProjectsComponent } from './developer/developer-list-projects/developer-list-projects.component';
import { DeveloperViewTaskComponent } from './developer/developer-view-task/developer-view-task.component';
import { SubmitTaskComponent } from './developer/submit-task/submit-task.component';
import { ListAllTaskComponent } from './developer/list-all-task/list-all-task.component';
import { ListPendingTaskComponent } from './developer/list-pending-task/list-pending-task.component';
import { TesterComponent } from './tester/tester/tester.component';
import { TesterDashboardComponent } from './tester/tester-dashboard/tester-dashboard.component';
import { TesterHeaderComponent } from './tester/tester-header/tester-header.component';
import { TesterSlidebarComponent } from './tester/tester-slidebar/tester-slidebar.component';
import { AddBugComponent } from './tester/add-bug/add-bug.component';
import { ListBugComponent } from './tester/list-bug/list-bug.component';
import { EditBugComponent } from './tester/edit-bug/edit-bug.component';
import { TesterListAllTaskComponent } from './tester/tester-list-all-task/tester-list-all-task.component';
import { TestTaskComponent } from './tester/test-task/test-task.component';
import { BugAssignComponent } from './tester/bug-assign/bug-assign.component';
import { TesterListPendingTaskComponent } from './tester/tester-list-pending-task/tester-list-pending-task.component';
import { TesterListAllBugsComponent } from './tester/tester-list-all-bugs/tester-list-all-bugs.component';
import { ListBugTaskComponent } from './developer/list-bug-task/list-bug-task.component';
import { BugFoundComponent } from './admin/bug-found/bug-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddRoleComponent,
    AdminHeaderComponent,
    ListRoleComponent,
    EditRoleComponent,
    AddUserComponent,
    ListUserComponent,
    AdminDashboardComponent,
    AddProjectComponent,
    ListProjectComponent,
    EditProjectComponent,
    AdminSlidebarComponent,
    AdminComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    LogoutComponent,
    AddModuleComponent,
    ListModuleComponent,
    EditModuleComponent,
    AddTaskComponent,
    ListTaskComponent,
    EditTaskComponent,
    ProjectManagerDashboardComponent,
    ProjectManagerComponent,
    ProjectManagerHeaderComponent,
    ProjectManagerSlidebarComponent,
    PendingApprovalComponent,
    AddUsersComponent,
    ListUsersComponent,
    ListProjectsComponent,
    PendingProjectsComponent,
    CompletedProjectsComponent,
    ListModulesComponent,
    EditModulesComponent,
    AddModulesComponent,
    ListProjectTeamComponent,
    PendingProjectComponent,
    CompletedProjectComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    AddProjectTeamComponent,
    UserReportComponent,
    ProjectReportComponent,
    TaskReportComponent,
    DevloperReportComponent,
    BugReportComponent,
    AddTeamMemberComponent,
    AssignTaskComponent,
    AssignModuleComponent,
    ViewTeamComponent,
    AddTeamMembersComponent,
    EditProjectsComponent,
    AssignTasksComponent,
    AddTasksComponent,
    ListTasksComponent,
    ModulesReportComponent,
    TasksReportComponent,
    DeveloperComponent,
    DeveloperDashboardComponent,
    DeveloperHeaderComponent,
    DeveloperSlidebarComponent,
    DeveloperListProjectsComponent,
    DeveloperViewTaskComponent,
    SubmitTaskComponent,
    ListAllTaskComponent,
    ListPendingTaskComponent,
    TesterComponent,
    TesterDashboardComponent,
    TesterHeaderComponent,
    TesterSlidebarComponent,
    AddBugComponent,
    ListBugComponent,
    EditBugComponent,
    TesterListAllTaskComponent,
    TestTaskComponent,
    BugAssignComponent,
    TesterListPendingTaskComponent,
    TesterListAllBugsComponent,
    ListBugTaskComponent,
    BugFoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
