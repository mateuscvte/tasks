import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../service/login.service";
import {Task} from "../../domain/task";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataSource = [
    {title: 'Task1', status: 'Done'},
    {title: 'Task2', status: 'Pending'},
    {title: 'Task3', status: 'Canceled'},
  ];
  cols: string[] = ['title', 'status', 'actions'];

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  singOut() {
    this.loginService.userLogout();
  }
}
