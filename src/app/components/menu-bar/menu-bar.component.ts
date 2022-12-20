import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent {
  menu = [
    {
      nome: 'Linkendin',
      url: '#',
    },
    {
      nome: 'Youtube',
      url: '#',
    },
    {
      nome: 'GitHub',
      url: '#',
    },
  ];
}
