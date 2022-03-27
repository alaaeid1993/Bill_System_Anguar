import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyDataComponent } from './Components/company-data/company-data.component';
import { UnitComponent } from './Components/unit/unit.component';
import { SharedServiseService } from './Services/shared-servise.service';
import{HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyDataComponent,
    UnitComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SharedServiseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
