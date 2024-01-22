import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { SignupComponent } from './componets/signup/signup.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { TaskComponent } from './componets/task/task.component';
import { BoardComponent } from './componets/board/board.component';
import { DragDropModule } from 'primeng/dragdrop';
import { KanbanComponent } from './kanban/kanban.component';

import { TaskboardModule } from './taskboard/taskboard.module';

import { CookieService } from 'ngx-cookie-service';
import { VerifyEmailComponent } from './componets/verify-email/verify-email.component';
import { ResetPasswordComponent } from './componets/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './componets/forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './componets/interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TaskComponent,
    BoardComponent,
    KanbanComponent,
    VerifyEmailComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    TaskboardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    CookieService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
