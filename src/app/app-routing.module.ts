import { LoginComponent } from './component/login/login.component';
import { AddBookComponent } from './component/add-book/add-book.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookdetailsComponent } from './component/book-details/book-details.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ActivityComponent } from './Component/activity/activity.component';
import { BookImagesComponent } from './Component/book-details/component/book-images/book-images.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'search',  component: BookListComponent },
  { path: 'bookdetails/:bookId', component: BookdetailsComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'addBook',  component: AddBookComponent },
  { path: 'myactivity',  component: ActivityComponent },
  { path: 'image',  component: BookImagesComponent },
  { path: 'login',  component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
