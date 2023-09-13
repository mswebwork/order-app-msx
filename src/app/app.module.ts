import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import Angular Material
import {MaterialModule} from "./material/material.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HomepageComponent } from './page/homepage/homepage.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HistoryOrderComponent } from './page/history-order/history-order.component';
import { MenuComponent } from './page/menu/menu.component';
import { PaymentsComponent } from './page/payments/payments.component';
import { HistOrderItemComponent } from './component/hist-order-item/hist-order-item.component';
import { HistoryOrderDetailsComponent } from './page/history-order/history-order-details/history-order-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    HistoryOrderComponent,
    MenuComponent,
    PaymentsComponent,
    HistOrderItemComponent,
    HistoryOrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
