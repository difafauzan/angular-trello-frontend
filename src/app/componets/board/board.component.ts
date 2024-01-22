import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TaskModel } from "../task/task.model";
import { ApiService } from "../../shared/api.service";
import { Router } from "@angular/router";
import { boardModel } from "./board.model";

import { Renderer2 } from "@angular/core";
import { AuthService } from "../../auth.service";
// import { AuthService } from "../../shared/auth.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrl: "./board.component.scss",
})
export class BoardComponent {
  boardForm!: FormGroup;
  boardModelObj: TaskModel = new boardModel();
  boardData!: any;
  showAdd!: boolean;
  row: any;
  username: string | undefined;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private renderer: Renderer2,
    private authService: AuthService,
    private cookies: CookieService
  ) {}

  ngOnInit(): void {
    this.loadExternalScript("assets/js/script.js").onload = () => {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.boardForm = this.fb.group({
        title: ["", Validators.required],
        description: ["", Validators.required],
      });
    };
    this.getAllBoard();
  }

  private loadExternalScript(scriptUrl: string): HTMLScriptElement {
    const script = this.renderer.createElement("script");
    script.type = "text/javascript";
    script.src = scriptUrl;
    this.renderer.appendChild(document.body, script);
    return script;
  }

  clickAddTask() {
    this.boardForm.reset();
  }

  postBoardDetails() {
    this.boardModelObj.title = this.boardForm.value.title;
    this.boardModelObj.description = this.boardForm.value.description;
    this.api.postBoard(this.boardModelObj).subscribe(
      (res) => {
        console.log(res);
        alert("Task added succesfully!");
        let ref = document.getElementById("cancel");
        ref?.click();
        this.boardForm.reset();
        this.getAllBoard();
      },
      (error) => {
        alert("Something went wrong!");
      }
    );
  }

  getAllBoard() {
    this.api.getTask().subscribe((res) => {
      this.boardData = res;
    });
  }

  deleteBoard(row: any) {
    this.api.deleteTask(row.id).subscribe(
      (res) => {
        alert("Task Deleted!");
        this.getAllBoard(); // Refresh the task list after deletion
      },
      (error) => {
        console.error("Error deleting task:", error);
        // Handle error accordingly (show error message, log, etc.)
      }
    );
  }

  onEditBoard(row: any) {
    this.boardModelObj.id = row.id;
    this.boardForm.controls["title"].setValue(row.title);
    this.boardForm.controls["description"].setValue(row.description);
  }

  updateBoardDetails() {
    this.boardModelObj.title = this.boardForm.value.title;
    this.boardModelObj.description = this.boardForm.value.description;

    this.api.updateBoard(this.boardModelObj, this.boardModelObj.id).subscribe(
      (res) => {
        console.log(res);
        alert("Task updated successfully!");
        let ref = document.getElementById("cancel");
        ref?.click();
        this.boardForm.reset();
        this.getAllBoard();
      },
      (error) => {
        console.error("Error updating task:", error);
        alert("Something went wrong!");
      }
    );
  }

  logout() {
    this.cookies.delete("access-token");
    this.cookies.delete("refresh-token");
    this.router.navigate(["/login"]);
  }
}
