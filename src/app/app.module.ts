import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeService } from './service/employee.service';
//import { FormreactiveComponent } from './formreactive/formreactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { EmpDetailComponent } from './components/emp-detail/emp-detail.component';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { StringPipe } from './pipes/string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpDetailComponent,
    SortPipe,
    FilterPipe,
    StringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
