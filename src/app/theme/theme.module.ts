import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginModule} from "./login/login.module";
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    LoginModule,

  ]
})
export class ThemeModule { }
