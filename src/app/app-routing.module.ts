import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './Components/home/home.component';
import { CompanyDataComponent } from './Components/company-data/company-data.component';
import { UnitComponent } from './Components/unit/unit.component';
import { TypeComponent } from './Components/type/type.component';
import { ClientComponent } from './Components/client/client.component';


const routes: Routes = [

  {path:'',  component:HomeComponent},
  {path:'home',  component:HomeComponent},
  {path:'companydata',  component:CompanyDataComponent},
  {path:'type',  component:TypeComponent},
  {path:'unit',  component:UnitComponent},
  {path:'client',  component:ClientComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
