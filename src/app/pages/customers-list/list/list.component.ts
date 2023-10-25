import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  customers:Customer [] = [];
  customerIdSelectedToDelete:number = -1;

  constructor (private customerService: CustomerService) {

  }

  ngOnInit(): void {
    this.customers = this.customerService.getList();
  }
  

  delete (id:number){
      this.customerService.delete (id);   
  }
  
}

