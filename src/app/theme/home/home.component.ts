import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login.service";
import {Task} from "../../domain/task";
import {TaskService} from "../../service/task.service";
import {MatDialog} from "@angular/material/dialog";
import {TaskFormComponent} from "./task-form/task-form.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tasks: Task[] = [];
  cols: string[] = ['title', 'status', 'actions'];

  constructor(
    public dialog: MatDialog,
    private taskService: TaskService,
    private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getAllTasks().subscribe(taks => {
      this.tasks = taks
    })
  }

  singOut() {
    this.loginService.userLogout();
  }

  openEditTask(row: Task) {
    const dialogRef = this.dialog.open(TaskFormComponent);
    dialogRef.componentInstance.dialogIs = 'edit';
    dialogRef.componentInstance.taskSelected = row;
    dialogRef.componentInstance.taskForm.patchValue({
      id: row.id,
      title: row.title,
      status: row.status,
    })
    dialogRef.afterClosed().subscribe(() => {
      this.getTasks();
    })
  }

  openDeleteTask(row: Task) {
    const dialogRef = this.dialog.open(TaskFormComponent);
    dialogRef.componentInstance.dialogIs = 'delete';
    dialogRef.componentInstance.taskSelected = row;
    dialogRef.afterClosed().subscribe(() => {
      this.getTasks();
    })
  }

  openCreateNewTask() {
    const dialogRef = this.dialog.open(TaskFormComponent);
    dialogRef.componentInstance.dialogIs = 'add';
    dialogRef.afterClosed().subscribe(() => {
      this.getTasks();
    })
  }
}
