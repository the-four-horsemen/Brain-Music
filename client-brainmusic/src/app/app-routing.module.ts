import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {ListFeedbackComponent} from './admin/list-feedback/list-feedback.component';
import {RegisterFormComponent} from './user/register-form/register-form.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'homepage', pathMatch: 'full'
  },
  {
    path: 'homepage', component: HomepageComponent
  },
  {
    path: 'feedback', component: ListFeedbackComponent
  },
  {
    path: 'sign-up', component: RegisterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
