import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import {OrdersComponent} from './components/orders/orders.component';
import { ContactusComponent } from './components/contacus/contacus.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [

      { path: '', component: HomeComponent },
       { path: 'home', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'about', component: AboutComponent },
  { path: 'orders', component: OrdersComponent },
   { path: 'contact', component: ContactusComponent },
];
