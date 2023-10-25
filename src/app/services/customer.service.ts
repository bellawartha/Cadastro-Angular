import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [];
  private nextId: number = 1;

  constructor() {

    let customer: Customer = {
      id: 1,
      name: 'José',
      email: "jose@email.com",
      birthdate: new Date("2011-11-11")
    }
    let customer2: Customer = {
      id: 2,
      name: 'João',
      email: "joao@email.com",
      birthdate: new Date("2012-12-12")
    }

    this.customers.push(customer)
    this.customers.push(customer2)
  };

  getList(): Customer[] {
    return this.customers;
  };

  add(customer: Customer) {
    customer.id = this.nextId++;
    this.customers.push(customer);
  };

  update() {

  };

  delete(id: number) {
    const i = this.customers.findIndex( customer =>customer.id === id );
    if (i> -1) {
      this.customers.splice(i,1);
    };
  };


}
