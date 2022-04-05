import { Component, ElementRef, OnInit, Type, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Bill } from 'src/app/Models/bill';
import { Item } from 'src/app/Models/item';
import { ClientService } from 'src/app/Services/Client/client.service';
import { ItemService } from 'src/app/Services/Item/item.service';
import { SalesInvoiceService } from 'src/app/Services/Sales_Invoice/sales-invoice.service';
import { TypeService } from 'src/app/Services/Type/type.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sales-invoice',
  templateUrl: './sales-invoice.component.html',
  styleUrls: ['./sales-invoice.component.css']
})
export class SalesInvoiceComponent implements OnInit {

  constructor(private saleser:SalesInvoiceService,private clientsar:ClientService,private itemser:ItemService) { 
    
  }

// --------------------------------------------------Validation--------------------------------------------//
// types:Type[]=[];

form = new FormGroup({
  'clients':new FormControl('',Validators.required,),
  'item' : new FormControl('',Validators.required,),
  'quatity':new FormControl('',Validators.required,),
  'sell':new FormControl('',Validators.required,),
  'date':new FormControl('',Validators.required,),
  'precent':new FormControl(null),
  'vdiscount':new FormControl(null),
  'paid':new FormControl(null),
  'net':new FormControl(null),
  'total':new FormControl(null),
  'rest':new FormControl(null),


})
isclick = false
category:any;
// -----------------------------------------------------------------------------------
  clients:any;
  item:any;
  billnumber!: number;
  sell:any;
  quatity!:number;
  total!:number
  date!: Date;
  precent!:number;
  vdiscount!:number;
  net!:number;
  paid!:number;
  rest!:number;
// ---------------------------------------------------------//
collection:any;
Bill: Bill[] = [];


ngOnInit(): void {
this.saleser.getsale().subscribe(
      billnumber => {
        this.billnumber = billnumber.length > 0 ? billnumber.reduce((a: { id: number; },b: { id: number; }) => a.id > b.id ? a: b).id + 1 : 1000
      });
this.clientsar.getclientlist().subscribe(data => this.clients = data);
this.itemser.getitem().subscribe(data => this.item = data);
this.clientsar.getclientlist().subscribe(data => this.clients = data);
this.saleser.getsale().subscribe(data => this.collection = data);
this.sell=0;
this.quatity=1
this.total=0
this.vdiscount=0
this.net=0
this.rest=0;


}

cancel(){

  this.form.reset()
  
}


  // ---------------------------------------Add Company-----------------------------------//
    additem(){
      if(this.form.value.clients,this.form.value.item)
      {

      
      var item ={
        ClintId:this.form.value.clients,
        BillDate:this.date,
        BillsTotal:this.form.value.item * this.form.value.quatity,
        PercentageDiscount:this.precent,
        ValueDiscount:this.vdiscount,
        theNet:this.net,
        paidUp:this.paid,
        theRest:this.rest

      }
      console.log(item)
      this.category=this.saleser.addsale(item).subscribe(()=>{
        Swal.fire({
          text: "Item Recorded",
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            this.saleser.getsale().subscribe(
              billnumber => {
                this.billnumber = billnumber.length > 0 ? billnumber.reduce((a: { id: number; },b: { id: number; }) => a.id > b.id ? a: b).id + 1 : 1000
              });
              this.sell=0;
              this.quatity=1;
              this.total=0;
              this.vdiscount=0,
              this.net=0,
              this.rest=0,
          this.saleser.getsale().subscribe(data => this.collection = data);
              this.form.reset();

          }
        })    
      });
    }
    else{

      Swal.fire({
        toast: true,
        position: 'center',
        icon: 'warning',
        title: 'Missing Info',
        showConfirmButton: false,
        timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
      })
    }
    }
// ------------------------------------------------------------------------------------//
    confirm(){
      if(this.form.value.clients,this.form.value.item)
      {
        var sale ={
          ClintId:this.form.value.clients,
          BillDate:this.date,
          BillsTotal:this.form.value.item * this.form.value.quatity
        }
        Swal.fire({
                  title: 'Are you sure?',
                  text: "Add With This Info Or Complete Other Info!!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, Save It!'
                }).then((result) => {
                  if (result.isConfirmed) {
                      this.category=this.saleser.addsale(sale).subscribe(()=>{
                        this.saleser.getsale().subscribe(
                          billnumber => {
                            this.billnumber = billnumber.length > 0 ? billnumber.reduce((a: { id: number; },b: { id: number; }) => a.id > b.id ? a: b).id + 1 : 1000
                          });
                        this.sell=0;
                        this.quatity=1;
                        this.total=0;
                        this.form.reset();
                    // this.itemlist=this.itemserv.getitem();
                          // this.sale=sale;
                          // this.sale=this.itemserv.deleteitem(item).subscribe();
                    Swal.fire(
                      'Added!',
                      'Your Recorded has been Added.',
                      'success'
                    )
          
          
                  }
                      )
      }})

      }
      else{

        Swal.fire({
          toast: true,
          position: 'center',
          icon: 'warning',
          title: 'Missing Info',
          showConfirmButton: false,
          timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
        })
      }
  }
// ------------------------------------------------------------------------------------//

    ite:any;

    deletebill(item:any){
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
                this.ite=this.saleser.deletesale(item).subscribe();
          Swal.fire(
            'Deleted!',
            'Your Recorded has been deleted.',
            'success'
          )
          this.saleser.getsale().subscribe(data => this.collection = data);


        }
      })
    }

// ----------------------------------------------------------------------------------------------------------------------------------------//
calcrest(){
    this.rest=((this.form.value.item*this.form.value.quatity) - this.vdiscount)-this.form.value.paid
    console.log(this.rest)
  }


vp(){
  this.vdiscount = this.form.value.precent *this.form.value.item*this.form.value.quatity
  console.log(this.vdiscount)
  this.net=(this.form.value.item*this.form.value.quatity) - this.vdiscount
  console.log(this.net)
}

show(){
  const table=<HTMLElement>document.getElementById("table")
  table.style.display="inline-table";
  var shalow={
    
  }
}
change(){

  this.sell=this.form.value.item;
  this.total=this.form.value.item*this.form.value.quatity
        
      }
    
    }