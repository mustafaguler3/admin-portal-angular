import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { PrimaryTransactionComponent } from './components/primary-transaction/primary-transaction.component';
import { SavingsTransactionComponent } from './components/savings-transaction/savings-transaction.component';

const routes: Routes = [
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"userAccount",component:UserAccountComponent},
  {path:"primaryTransaction/:username",component:PrimaryTransactionComponent},
  {path:"savingsTransaction/:username",component:SavingsTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
