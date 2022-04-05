import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/Services/Company/company.service';
import { CompanytypeService } from 'src/app/Services/CompanyType/companytype.service';
import { ItemService } from 'src/app/Services/Item/item.service';
import { TypeService } from 'src/app/Services/Type/type.service';
import { unitService } from 'src/app/Services/unit/unit.service';
import Swal from 'sweetalert2';
import { Type } from 'src/app/Models/type';
import { Company } from 'src/app/Models/company';
import { ComType } from 'src/app/Models/com-type';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private itemserv:ItemService,private unitser:unitService,private tyser:TypeService, private comser:CompanyService,private serv:CompanytypeService) { 
    
  }

// --------------------------------------------------Validation--------------------------------------------//
form = new FormGroup({
  'name':new FormControl('',Validators.required,),
  'comp' : new FormControl('',Validators.required,),
  'type' : new FormControl('',Validators.required,),
  'unit':new FormControl('',Validators.required,),
  'quatity':new FormControl('',Validators.required,),
  'sell':new FormControl('',Validators.required,),
  'buy':new FormControl('',Validators.required,),
  'date':new FormControl('',Validators.required,),
  note:new FormControl(null),

})
isclick = false
category:any;
// ------------------------------------------------------------//
  companys: any;
  types:any;
  units:any;
  name:any;
  TypeDataid:any;
  unitDataId:any;
  quatity!:number;
  sell!: number;
  buy!:number;
  note:any;
  date!: Date;
  // ---------------------------------------------------------//
  // companyDataId:any;
itemlist:any;
companytypess:any;
compid:any;

  ngOnInit(): void {
    this.itemlist=this.itemserv.getitem()
    this.comser.getcompanylist().subscribe(data => this.companys = data)
    this.tyser.gettypelist().subscribe(data => this.types = data)
    this.unitser.getunitlist().subscribe(data => this.units = data)
    this.serv.getcomtylist().subscribe(data => this.companytypess = data)
  }


cancel(){
  this.form.reset()
  
  var d = new Date();
  var datetime = d.toLocaleString();console.log(datetime);
  console.log(datetime);
}



  // ---------------------------------------Add Company-----------------------------------//
  datat= new Date();
    additem(){


    // tr(companyTypes: companytypes[], companyId: number) : CompanytypeService[] {
    //   const types: CompanytypeService[] = []
    //   for (let cType of companyTypes) {
    //     if (cType.companyId == companyId)
    //       types.push(cType)
    //   }
    //   return types;
    // }


      // ---------------------------------
      var d = new Date();
      var datetime = d.toLocaleString();console.log(datetime);
      console.log(datetime);
      var item ={
                  name:this.name,
                  typeId:this.form.value.type,
                  companyId:this.form.value.comp,
                  unitId:this.form.value.unit,
                  quantityRest:this.quatity,
                  balanceOfTheFirstDuration:this.quatity,
                  sellingPrice:this.sell,
                  buyingPrice:this.buy,
                  notes:this.note,
                  entryDate:this.date
      }
      console.log(item)
      this.category=this.itemserv.additem(item).subscribe(()=>{
        Swal.fire({
          text: "Item Recorded",
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
   
            this.form.reset();
            this.itemlist=this.itemserv.getitem();
          }
        })    
      });
    }
    // ------------------------------------------------------------------------------------//

    ite:any;

    deleteitem(item:any){
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
          this.itemlist=this.itemserv.getitem();
                this.ite=item;
                this.ite=this.itemserv.deleteitem(item).subscribe();
          Swal.fire(
            'Deleted!',
            'Your Recorded has been deleted.',
            'success'
          )


        }
      })
    }

companymodel:Company[]=[];
typemodel:Type[]=[];
companytypemodel:ComType[]=[]




  }
