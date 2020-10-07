import { Component, OnInit } from '@angular/core';
import { Branch } from 'src/app/models/branch';
import { Customer } from 'src/app/models/customer';
import { BranchService } from 'src/app/services/branch.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-data-source',
  templateUrl: './data-source.component.html',
  styleUrls: ['./data-source.component.scss']
})
export class DataSourceComponent implements OnInit {
  public customers: Customer[];
  public branches: Branch[];

  constructor(
    private customerService: CustomerService,
    private branchService: BranchService) { }

  public async ngOnInit(): Promise<void> {
    await this.getCustomers();
  }

  private async getCustomers() {
    this.customers = await this.customerService.getAll();
    this.branches = await this.branchService.getAll();

    for (const customer of this.customers) {
      const branch = this.branches.find(b => b.id === customer.branchId);
      if (branch !== null || branch !== undefined) {
        customer.branch = branch;
      }  else {
        customer.branch = new Branch();
      }
    }
  }

  public async deleteCustomer(id: number) {
    await this.customerService.delete(id);
    this.customers = this.customers.filter(c => c.id !== id);
  }

  public async changeBranchStatus(id: number, activate: boolean) {
    const branch = this.branches.find(b => b.id === id);
    branch.active = activate;

    await this.branchService.update(branch);
  }
}
