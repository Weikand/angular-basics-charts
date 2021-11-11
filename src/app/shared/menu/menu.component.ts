import {Component} from '@angular/core';

interface MenuItem {
  route: string;
  text: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class MenuComponent {

  menu: MenuItem[] = [
    {route: '/graphics/bar', text: 'Bars'},
    {route: '/graphics/double-bar', text: 'Double Bars'},
    {route: '/graphics/doughnut', text: 'Doughnut'},
    {route: '/graphics/doughnut-http', text: 'Doughnut Http'},
  ]

}
