import { Component, OnInit } from '@angular/core';
import { SalesInvoiceService } from 'src/app/Services/Sales_Invoice/sales-invoice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private server:SalesInvoiceService) { }

  collection:any;
  ngOnInit(): void {
    this.server.getsale().subscribe(data=>this.collection=data)
  }

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
              this.ite=this.server.deletesale(item).subscribe();
        Swal.fire(
          'Deleted!',
          'Your Bill has been deleted.',
          'success'
        )
        this.server.getsale().subscribe(data => this.collection = data);


      }
    })
  }



}
