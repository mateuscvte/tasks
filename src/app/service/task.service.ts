import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Task} from "../domain/task";
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable()
export class TaskService {

  api = environment.API

  constructor(private http: HttpClient) { }


  getAllTasks() {
    return this.http.get<Task[]>(`${this.api}/tasks`)
  }

  createNewTask(task) {
    return this.http.post(`${this.api}/tasks/add`, task)
  }

  updateTaskSelected(task: Task) {
    return this.http.put<any>(`${this.api}/tasks/${task.id}`, task)
  }

  deleteTaskSelected(task: Task) {
    return this.http.delete(`${this.api}/tasks/${task.id}`)
  }
}
