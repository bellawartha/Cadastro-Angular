import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [];

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

  getById(id: number) {
    return this.customers.find(customer => customer.id === id);
  };

  update(customer:Customer) {
    let searchCustomer = this.getById(customer.id);

    if( searchCustomer){
      searchCustomer.name = customer.name;
      searchCustomer.email = customer.email;
      searchCustomer.birthdate = customer.birthdate;
    }
  };

  add(customer: Customer) {
    let maxId = Number(this.getMaxId());

    if (maxId)
      customer.id = maxId + 1;
    else
      customer.id = 1;

    console.log (customer)
    this.customers.push(customer);
  }

  delete(id: number) {
    const i = this.customers.findIndex(customer => customer.id === id);
    if (i > -1) {
      this.customers.splice(i, 1);
    };
  };

  getMaxId() {
    return this.customers.reduce((maxId, currentId) => {
      return currentId > maxId ? currentId : maxId
    })
  }
}
