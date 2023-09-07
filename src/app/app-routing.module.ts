import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./page/login/login.component";
import {PageNotFoundComponent} from "./page/page-not-found/page-not-found.component";
import {HomepageComponent} from "./page/homepage/homepage.component";
import {HistoryOrderComponent} from "./page/history-order/history-order.component";
import {MenuComponent} from "./page/menu/menu.component";
import {PaymentsComponent} from "./page/payments/payments.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'order', component: HistoryOrderComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'payments', component: PaymentsComponent },


  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
