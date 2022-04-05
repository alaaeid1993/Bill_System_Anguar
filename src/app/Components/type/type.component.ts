import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CompanyService } from 'src/app/Services/Company/company.service';
import { TypeService } from 'src/app/Services/Type/type.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

 
  constructor(private serv:TypeService) { 
    
  }

// --------------------------------------------------Validation--------------------------------------------//

form = new FormGroup({
  spiecevalidate : new FormControl('',Validators.required,),
  notevalidate : new FormControl(null),

})
isclick = false

// ------------------------------------------------------------------------------------------------------//
  
// --------------------------------------------------Vars--------------------------------------------//
typelist!:Observable<any[]>;
  type:any;
  name:string="";
  notes:string=""
 
  // ----------------------------------------------------------------------------------------------//
  


  ngOnInit(): void {
    this.typelist=this.serv.gettypelist();
  }

// ---------------------------------------Cancel Add Company-----------------------------------//

  cancel(){
this.form.reset();
  }
  // --------------------------------------------------------------------------------------------//


  // ---------------------------------------Add Company-----------------------------------//
  addtype(){
    var type ={
      name:this.name,
      notes:this.notes
    }
    this.type=this.serv.addtype(type).subscribe(()=>{
      Swal.fire({
        text: "Unit Recorded",
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
 
          this.form.reset();
          this.typelist=this.serv.gettypelist();
        }
      })    
    });
  }
  // ------------------------------------------------------------------------------------//
  


  // ---------------------------------------Delete Company-------------------------------//

  deletetype(item:any){
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
          this.typelist=this.serv.gettypelist();
                this.type=item;
                this.type=this.serv.deletetype(item).subscribe();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )


        }
      })
    }
  // -----------------------------------------------------------------------------------------//
}
