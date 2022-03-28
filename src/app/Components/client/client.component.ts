import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ClientService } from 'src/app/Services/Client/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private serv:ClientService) { 
    
  }

// --------------------------------------------------Validation--------------------------------------------//

form = new FormGroup({
  namevalidate : new FormControl('',Validators.required,),
  phonevalidate : new FormControl('',Validators.required,),
  addressvalidate : new FormControl('',Validators.required,),
  // namevalidate : new FormControl('',Validators.required,),

  // nameuniqe : new FormControl(null,Validators.),
  idvalidate : new FormControl(null),
})
isclick = false

// ------------------------------------------------------------------------------------------------------//
  
  // --------------------------------------------------Vars--------------------------------------------//
  clientist!: Observable<any[]>;
  client:any;
  clientnumber!: number;
  name:string="";
  phone:string|number="";
  address:string="";
  // ----------------------------------------------------------------------------------------------//
  


  ngOnInit(): void {
    this.clientist=this.serv.getclientlist();
    this.serv.getclientlist().subscribe(
      clinumber => {
        this.clientnumber = clinumber.length > 0 ? clinumber.reduce((a: { id: number; },b: { id: number; }) => a.id > b.id ? a: b).id + 1 : 1000
      });
    
  }

// ---------------------------------------Cancel Add Company-----------------------------------//

  cancel(){
    this.form.reset()
    }
  // --------------------------------------------------------------------------------------------//


  // ---------------------------------------Add Company-----------------------------------//
  addclients(){
    var client ={
      name:this.name,
      phone:this.phone,
      id:this.clientnumber,
      address:this.address
    }
    this.client=this.serv.addclient(client).subscribe(()=>{
      Swal.fire({
        text: "client Recorded",
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          this.form.reset();
          this.serv.getclientlist().subscribe(
            clinumber => {
              this.clientnumber = clinumber.length > 0 ? clinumber.reduce((a: { id: number; },b: { id: number; }) => a.id > b.id ? a: b).id + 1 : 1000
            });
          this.clientist=this.serv.getclientlist();
        }
      })    
    });
  }

  // ------------------------------------------------------------------------------------//
  


  // ---------------------------------------Delete Company-------------------------------//

  deleteclients(item:any){
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
          this.clientist=this.serv.getclientlist();
                this.client=item;
                this.client=this.serv.deleteclient(item).subscribe();
          Swal.fire(
            'Deleted!',
            'Your Recorded has been deleted.',
            'success'
          )


        }
      })
    }
  // -----------------------------------------------------------------------------------------//

}
