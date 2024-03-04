import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { SignupComponent } from './componets/signup/signup.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { TaskComponent } from './componets/task/task.component';
import { BoardComponent } from './componets/board/board.component';

import { KanbanComponent } from './kanban/kanban.component';

import { TaskboardModule } from './taskboard/taskboard.module';

import { CookieService } from 'ngx-cookie-service';
import { VerifyEmailComponent } from './componets/verify-email/verify-email.component';
import { ResetPasswordComponent } from './componets/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './componets/forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './componets/interceptors/token.interceptor';

// Material UI
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Material UI
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';

export let InjectorInstance: Injector;

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
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    TaskboardModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    DragDropModule,
    MatSnackBarModule,
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
export class AppModule {
  constructor(private injector: Injector) {
    InjectorInstance = this.injector;
  }
}
