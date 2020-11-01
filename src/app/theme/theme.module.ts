import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginModule} from "./login/login.module";
import {HomeModule} from "./home/home.module";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    HomeModule,
    MatTableModule,
    MatCardModule
  ]
})
export class ThemeModule { }
