import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitService } from 'src/app/Services/unit/unit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

 
  constructor(private serv:UnitService) { 
    
  }


  
  // --------------------------------------------------Vars--------------------------------------------//
  unitist!:Observable<any[]>;
  company:any;
  name:string="";
  notes:string="";
  id!: number;
  // ----------------------------------------------------------------------------------------------//
  


  ngOnInit(): void {
    this.unitist=this.serv.getunitlist();
    
    
  }

// ---------------------------------------Cancel Add Company-----------------------------------//

  cancel(){
    this.name=""
    this.notes=""
  }
  // --------------------------------------------------------------------------------------------//


  // ---------------------------------------Add Company-----------------------------------//
  addunits(){
    var unit ={
      name:this.name,
      notes:this.notes
    }
    this.company=this.serv.addunit(unit).subscribe(()=>{
      Swal.fire({
        text: "Unit Recorded",
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
 
          this.name="";
          this.notes="";
          this.unitist=this.serv.getunitlist();
        }
      })    
    });
  }
  // ------------------------------------------------------------------------------------//
  


  // ---------------------------------------Delete Company-------------------------------//

  deleteunits(item:any){
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
          this.unitist=this.serv.getunitlist();
                this.company=item;
                this.company=this.serv.deleteunit(item).subscribe();
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
