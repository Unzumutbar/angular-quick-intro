import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: '1. Bindings',
      url: '/binding',
    },
    {
      title: '2. Directives',
      url: '/directives',
    },
    {
      title: '3. Pipes',
      url: '/pipes',
    },
    {
      title: '4. CRUD',
      url: '/data-source',
    },
    {
      title: '5. Kein Eintrag',
      url: '/data-source',
    }
  ];

  constructor(
  ) {
  }
}

