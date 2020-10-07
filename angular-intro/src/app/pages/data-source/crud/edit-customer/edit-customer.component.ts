import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  private id: number;
  public customerEditForm: FormGroup = this.fb.group({
    id: [''],
    name: [''],
    purchases: [''],
    branchId: [''],
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
  ) { }

  public async ngOnInit(): Promise<void> {
    this.id = this.activatedRoute.snapshot.params.id;
    const customer = await this.customerService.get(this.id);

    this.customerEditForm.patchValue(customer);
  }

  public async updateCustomer() {
    await this.customerService.update(this.customerEditForm.value as Customer);
    this.router.navigate(['/data-source']);
  }

  public cancel() {
    this.router.navigate(['/data-source']);
  }
}
