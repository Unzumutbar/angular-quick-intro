import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  public customerAddForm: FormGroup = this.fb.group({
    id: [''],
    name: [''],
    purchases: [''],
    branchId: [''],
  });

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
  ) { }

  public async ngOnInit(): Promise<void> {
    this.customerAddForm.patchValue(new Customer());
  }

  public async addCustomer() {
    const customers = await this.customerService.getAll();
    const maxId = Math.max.apply(Math, customers.map(o => o.id));

    const newCustomer = this.customerAddForm.value as Customer;
    newCustomer.id = maxId + 1;

    await this.customerService.add(newCustomer);
    this.router.navigate(['/data-source']);
  }

  public cancel() {
    this.router.navigate(['/data-source']);
  }
}
