import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BindingComponent } from './pages/binding/binding.component';
import { AddBranchComponent } from './pages/data-source/crud/add-branch/add-branch.component';
import { AddCustomerComponent } from './pages/data-source/crud/add-customer/add-customer.component';
import { EditCustomerComponent } from './pages/data-source/crud/edit-customer/edit-customer.component';
import { DataSourceComponent } from './pages/data-source/data-source.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { PipesComponent } from './pages/pipes/pipes.component';

const routes: Routes = [
  { path: 'binding', component: BindingComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'data-source', component: DataSourceComponent },
  { path: 'data-source/addcustomer', component: AddCustomerComponent},
  { path: 'data-source/:id/editcustomer', component: EditCustomerComponent },
  { path: 'data-source/addbranch', component: AddBranchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
