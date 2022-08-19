import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EmpDataComponent } from './emp-data/emp-data.component';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmpDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,TableModule,ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
