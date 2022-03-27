import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './Components/home/home.component';
import { CompanyDataComponent } from './Components/company-data/company-data.component';
import { UnitComponent } from './Components/unit/unit.component';


const routes: Routes = [

  {path:'',  component:HomeComponent},
  {path:'home',  component:HomeComponent},
  {path:'companydata',  component:CompanyDataComponent},
  {path:'unit',  component:UnitComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
