import { Component } from '@angular/core';
import { Navbar } from 'src/app/interface/navbar.interface';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public isSidebarShown: boolean = false;

  public sidebarItems: Navbar[] = [
    {name: 'Home'},
    {name: 'New'},
    {name: 'Popular'},
    {name: 'Trending'},
    {name: 'Categories'},
  ]
}
