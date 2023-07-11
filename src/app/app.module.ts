import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { PrimaryTransactionComponent } from './components/primary-transaction/primary-transaction.component';
import { SavingsTransactionComponent } from './components/savings-transaction/savings-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    UserAccountComponent,
    PrimaryTransactionComponent,
    SavingsTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
