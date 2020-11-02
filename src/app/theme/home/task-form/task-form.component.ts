import {Component, OnInit} from '@angular/core';
import {Task} from "../../../domain/task";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TaskService} from "../../../service/task.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  tasks: Task[] = [];
  taskForm: FormGroup;
  taskSelected: Task;
  dialogIs: string;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    public dialog: MatDialog,
  ) {
    this.taskForm = this.fb.group({
      id: this.fb.control(''),
      title: this.fb.control(''),
      status: this.fb.control(''),
    })
  }

  ngOnInit(): void {

  }

  createNewTask() {
    const task = this.taskForm.getRawValue();
    this.taskService.createNewTask(task).subscribe(response => {
      this.dialog.closeAll();
    })
  }

  onUpdateTask() {
    const task = this.taskForm.getRawValue();
    this.taskService.updateTaskSelected(task).subscribe(response => {
      this.dialog.closeAll();
    });
  }

  confirmDeleteTask() {
    this.taskService.deleteTaskSelected(this.taskSelected).subscribe(response => {
      this.dialog.closeAll();
    })
  }

  close() {
    this.dialog.closeAll();
  }
}
