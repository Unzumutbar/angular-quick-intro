import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  public twoWayInput: string;
  public oneWayInput: string;
  public customer: Customer;

  constructor() { }

  public ngOnInit(): void {
    this.customer = null;
  }
}
