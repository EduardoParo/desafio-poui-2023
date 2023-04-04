import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
})
export class MenuComponent implements OnInit {
  menuItems!:PoMenuItem[];

  constructor( private router: Router){
  }

  ngOnInit(): void {
    this.onInitMenu();
  }

  onInitMenu(): void {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'po-icon-clock',
        link: '/home'
        //action: () => this.router.navigate(['home'])
      },
      { 
        label: 'Lançamentos',
         icon: 'po-icon-cart',
         action: () => this.router.navigate(['entries'])
      },
      { label: 'Categorias', link: 'categories' },
    ];
  }
}
