import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Observable } from 'rxjs';
import { CompanyService } from 'src/app/Services/Company/company.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['./company-data.component.css']
})
export class CompanyDataComponent implements OnInit {

  
  constructor(private serv:CompanyService) { 
    
  }



// --------------------------------------------------Validation--------------------------------------------//

  form = new FormGroup({
    namevalidate : new FormControl('',
      Validators.required,),
    // nameuniqe : new FormControl(null,Validators.),
    notevalidate : new FormControl(null),
  })
  isclick = false

  // ------------------------------------------------------------------------------------------------------//

  
  // --------------------------------------------------Vars------------------------------------------------//
  companylist!:Observable<any[]>;
  company:any;
  name:string="";
  notes:string="";
  id!: number;
  // ------------------------------------------------------------------------------------------------------//
  


  ngOnInit(): void {
    this.companylist=this.serv.getcompanylist();
    
    
  }

// -------------------------------------------------Cancel Add Company-------------------------------------//

  cancel(){
    this.name=""
    this.notes=""
  }
  // ------------------------------------------------------------------------------------------------------//


  // ----------------------------------------------Add Company--------------------------------------------//
  addcompany(){
    var comp ={
      name:this.name,
      notes:this.notes
    }
    this.company=this.serv.addcompany(comp).subscribe(()=>{
      Swal.fire({
        text: "Company Recorded",
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
 
          this.name="";
          this.notes="";
          this.form.reset();
          this.companylist=this.serv.getcompanylist();        

        }
      })    
    });
  }
  // ----------------------------------------------------------------------------------------------------//
  


  // ---------------------------------------Delete Company----------------------------------------------//

  deletecomp(item:any){
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
          this.companylist=this.serv.getcompanylist();
                this.company=item;
                this.company=this.serv.deletecompany(item).subscribe();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )


        }
      })
    }
  // -----------------------------------------------------------------------------------------//


  // companylistt: CompanyService[] = [];

  // nameIsUnique(control: FormControl) : {[msg: string]: boolean} {
  //   for (let company of this.companylistt){
  //     if (company.name.toLowerCase() === control.value?.toLowerCase())
  //       return {'exists': true}
  //   }
  //   return null;
  // }



  }


