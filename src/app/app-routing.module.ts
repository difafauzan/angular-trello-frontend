import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
import { SignupComponent } from './componets/signup/signup.component';
import { TaskComponent } from './componets/task/task.component';
import { KanbanComponent } from './kanban/kanban.component';
import { BoardComponent } from './componets/board/board.component';
import { VerifyEmailComponent } from './componets/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './componets/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './componets/reset-password/reset-password.component';
import { AuthGuard } from './shared/auth.guard';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'task', component: TaskComponent },
  { path: 'board', component: BoardComponent, canActivate: [AuthGuard] },
  { path: 'kanban', component: KanbanComponent },
  { path: 'verify-email/:token', component: VerifyEmailComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
