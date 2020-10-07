import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  public classInput: string;
  public styleInput: string;
  public numberInput: number;
  public customers = [
    {
      name: 'Richard',
      purchases: 10,
      vip: false,
    },
    {
      name: 'Jim',
      purchases: 20,
      vip: false,
    },
    {
      name: 'Rachel',
      purchases: 40,
      vip: true,
    },
    {
      name: 'Barbara',
      purchases: 80,
      vip: false,
    },
    {
      name: 'GabeN',
      purchases: 2,
      vip: true,
    }
  ];

  constructor() { }

  public ngOnInit(): void {
  }
}
