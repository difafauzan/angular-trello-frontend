import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "../../shared/api.service";
import { TaskModel } from "./task.model";
import { __values } from "tslib";
import { Router } from "@angular/router";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrl: "./task.component.scss",
})
export class TaskComponent implements OnInit {
  taskForm!: FormGroup;
  taskModelObj: TaskModel = new TaskModel();
  taskData!: any;
  showAdd!: boolean;
  row: any;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.taskForm = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
    });
    // this.getAllTask();
  }

  // goToBoard(id: number) {
  //   this.router.navigate(['/board']);
  // }

  // // clickAddTask() {
  // //   this.taskForm.reset();
  // // }

  // postTaskDetails() {
  //   this.taskModelObj.title = this.taskForm.value.title;
  //   this.taskModelObj.description = this.taskForm.value.description;
  //   this.api.postTask(this.taskModelObj).subscribe(
  //     (res) => {
  //       console.log(res);
  //       alert('Task added succesfully!');
  //       let ref = document.getElementById('cancel');
  //       ref?.click();
  //       this.taskForm.reset();
  //       this.getAllTask();
  //     },
  //     (error) => {
  //       alert('Something went wrong!');
  //     }
  //   );
  // }

  // getAllTask() {
  //   this.api.getTask().subscribe((res) => {
  //     this.taskData = res;
  //   });
  // }

  // deleteTask(row: any) {
  //   this.api.deleteTask(row.id).subscribe(
  //     (res) => {
  //       alert('Task Deleted!');
  //       this.getAllTask(); // Refresh the task list after deletion
  //     },
  //     (error) => {
  //       console.error('Error deleting task:', error);
  //       // Handle error accordingly (show error message, log, etc.)
  //     }
  //   );
  // }

  // onEdit(row: any) {
  //   this.taskModelObj.id = row.id;
  //   this.taskForm.controls['title'].setValue(row.title);
  //   this.taskForm.controls['description'].setValue(row.description);
  // }

  // updateTaskDetails() {
  //   this.taskModelObj.title = this.taskForm.value.title;
  //   this.taskModelObj.description = this.taskForm.value.description;

  //   this.api.updateTask(this.taskModelObj, this.taskModelObj.id).subscribe(
  //     (res) => {
  //       console.log(res);
  //       alert('Task updated successfully!');
  //       let ref = document.getElementById('cancel');
  //       ref?.click();
  //       this.taskForm.reset();
  //       this.getAllTask();
  //     },
  //     (error) => {
  //       console.error('Error updating task:', error);
  //       alert('Something went wrong!');
  //     }
  //   );
  // }
}
