import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import ValidateForm from "../../helpers/validateform";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs";

import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private cookies: CookieService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = "fa-eye") : (this.eyeIcon = "fa-eye-slash");
    this.isText ? (this.type = "text") : (this.type = "password");
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const userData = this.loginForm.value;

      this.http
        .post<any>("http://192.168.50.99:3000/auth/login", userData)
        .pipe(
          catchError((error: any) => {
            console.error("Error during login:", error);
            throw error;
          })
        )
        .subscribe(
          (response) => {
            if (
              response &&
              response.backendTokens &&
              response.backendTokens.accessToken
            ) {
              // Handle successful login response
              this.cookies.set(
                "access-token",
                response.backendTokens.accessToken
              );
              this.cookies.set(
                "refresh-token",
                response.backendTokens.refreshToken
              );
              console.log(
                "User logged in successfully:",
                response.backendTokens
              );
              alert("Login successfully !");
              this.router.navigate(["/board"]);
            } else {
              // Handle invalid login response
              console.error("Invalid login response:", response);
              alert("Invalid login response. Please try again.");
            }
          },
          (error) => {
            console.error("Login failed:", error);
            alert("Login failed. Please try again.");
          }
        );
    } else {
      // View error
      ValidateForm.validateAllFormFileds(this.loginForm);
      console.log("Form is not valid");
    }
  }
}
