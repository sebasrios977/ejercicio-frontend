import { Component } from '@angular/core';
import { Navbar } from 'src/app/interface/navbar.interface';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public navbarItems: Navbar[] = [
    {name: 'Home'},
    {name: 'New'},
    {name: 'Popular'},
    {name: 'Trending'},
    {name: 'Categories'},
  ]
}
