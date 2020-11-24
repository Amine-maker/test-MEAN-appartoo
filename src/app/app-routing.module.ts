import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSchtrompfComponent } from './components/add-schtrompf/add-schtrompf.component';
import { SchtrompfDetailsComponent } from './components/schtrompf-details/schtrompf-details.component';
import { LoginComponent } from './components/add-schtrompf/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'schtrompf/:id', component: SchtrompfDetailsComponent },
  { path: 'login', component: AddSchtrompfComponent },
  { path: 'register', component: LoginComponent },
  { path: 'logout', component: LoginComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
