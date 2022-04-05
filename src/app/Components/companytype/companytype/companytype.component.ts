import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CompanyService } from 'src/app/Services/Company/company.service';
import { CompanytypeService } from 'src/app/Services/CompanyType/companytype.service';
import { TypeService } from 'src/app/Services/Type/type.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-companytype',
  templateUrl: './companytype.component.html',
  styleUrls: ['./companytype.component.css']
})
export class CompanytypeComponent implements OnInit {

  constructor(private tyser:TypeService, private comser:CompanyService,private serv:CompanytypeService) { 
    
  }

// --------------------------------------------------Validation--------------------------------------------//

form = new FormGroup({
  'comp' : new FormControl('',Validators.required,),
  'ty' : new FormControl('',Validators.required,),
  notevalidate : new FormControl(null),

})
isclick = false
popup =false
// ------------------------------------------------------------------------------------------------------//
  
// --------------------------------------------------Vars--------------------------------------------//
companys: any;
types:any;
companytypes:any;
companytypelist:any;

datas:any;
 
  // ----------------------------------------------------------------------------------------------//
  ngOnInit(): void {
    this.companytypelist=this.serv.getcomtylist();
    this.comser.getcompanylist().subscribe(data => this.companys = data)
    this.tyser.gettypelist().subscribe(data => this.types = data)
    

  }

// ---------------------------------------Cancel Add Company-----------------------------------//

  cancel(){
this.form.reset();
  }
  // --------------------------------------------------------------------------------------------//


  // ---------------------------------------Add Company-----------------------------------//
  TypeDataid:any;
  companyDataId:any;

  addcomplex(){
    var comp ={
      TypeDataid:this.form.value.ty,
      companyDataId:this.form.value.comp
      }
      // console.log(comp)
      this.companytypes=this.serv.addcomty(comp).subscribe(()=>{
        Swal.fire({
          text: "Company Recorded",
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
   
            this.form.reset();
            this.companytypelist=this.serv.getcomtylist();        
        
          }
        })    
      });
    }
  // ------------------------------------------------------------------------------------//
  


  // ---------------------------------------Delete Company-------------------------------//
ite:any;

deletecomty(item:any){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.ite=item;
            this.ite=this.serv.deletecomty(item).subscribe();
            this.companytypelist=this.serv.getcomtylist();        
      Swal.fire(
        'Deleted!',
        'Your Recorded has been deleted.',
        'success'
      )


    }
  })
}








}



// -----------------------------------------------------------------------------------------------------------
// typeunique(control:FormControl{
//   for(let i of this.companytypelist){
//     if(i.companyDataId == this.from.value.comp && i.TypeDataid == control.value){
//       return {'exists': true}
//     }
//   }
//   return null
// }
