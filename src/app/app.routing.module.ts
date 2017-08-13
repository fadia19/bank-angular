import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from './app.component';
import { UserComponent }  from './components/user/user.component';
import { ViewComponent } from './components/view/view.component';
import { BankComponent } from './components/bank/bank.component';

const routes: Routes = [
    {path : '' , redirectTo : 'create-bank' , pathMatch : 'full'},
    {path : 'create-bank' , component : BankComponent},
    {path : 'create-user' , component : UserComponent},
    {path : 'view-data' , component : ViewComponent}
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}