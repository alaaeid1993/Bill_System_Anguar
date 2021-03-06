import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyDataComponent } from './Components/company-data/company-data.component';
import { UnitComponent } from './Components/unit/unit.component';
import{HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';
import { CompanyService } from './Services/Company/company.service';
import { TypeComponent } from './Components/type/type.component';
import { ClientComponent } from './Components/client/client.component';
import { ClientService } from './Services/Client/client.service';
import { TypeService } from './Services/Type/type.service';
import { CompanytypeComponent } from './Components/companytype/companytype/companytype.component';
import { CategoryComponent } from './Components/category/category.component';
import { TypeforCompanyPipe } from './CustomePipe/typefor-company.pipe';
import { SalesInvoiceComponent } from './Components/sales-invoice/sales-invoice.component';
import { ReportComponent } from './Components/report/report.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyDataComponent,
    UnitComponent,
    HomeComponent,
    TypeComponent,
    ClientComponent,
    CompanytypeComponent,
    CategoryComponent,
    TypeforCompanyPipe,
    SalesInvoiceComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CompanyService,
    TypeService,
    ClientService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
