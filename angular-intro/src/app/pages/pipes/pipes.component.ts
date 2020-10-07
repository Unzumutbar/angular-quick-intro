import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  public textInput: string;
  public dateInput: Date;
  public numberInput: number;
  public customInput: number;

  constructor() {
   }

  public ngOnInit(): void {
  }

}
