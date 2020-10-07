import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './pages/binding/binding.component';
import { AddBranchComponent } from './pages/data-source/crud/add-branch/add-branch.component';
import { AddCustomerComponent } from './pages/data-source/crud/add-customer/add-customer.component';
import { EditCustomerComponent } from './pages/data-source/crud/edit-customer/edit-customer.component';
import { DataSourceComponent } from './pages/data-source/data-source.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { SquarePipe } from './pipes/square.pipe';
import { IncrementPipe } from './pipes/increment.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    DirectivesComponent,
    DataSourceComponent,
    BindingComponent,
    SquarePipe,
    AddCustomerComponent,
    EditCustomerComponent,
    AddBranchComponent,
    IncrementPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
