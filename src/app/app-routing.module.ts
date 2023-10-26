import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './pages/customers-list/customers-list.component';
import { CustomersEditComponent } from './pages/customers-edit/customers-edit.component';

const routes: Routes = [  { path: '', component: CustomersListComponent},
{ path: 'customersList', component: CustomersListComponent },
{ path: 'customersEdit/:id', component: CustomersEditComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
