import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSchtrompfComponent } from './components/add-schtrompf/add-schtrompf.component';
import { SchtrompfDetailsComponent } from './components/schtrompf-details/schtrompf-details.component';
import { LoginComponent } from './components/add-schtrompf/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddSchtrompfComponent,
    SchtrompfDetailsComponent,
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
