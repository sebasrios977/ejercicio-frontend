import { Component } from '@angular/core';
import { Category } from 'src/app/interface/category.interface';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  public categories: Category[] = [
    {img: 'assets/images/image-retro-pcs.jpg', number: '01', title: 'Reviving Retro PCs', paragraph: 'What happens when old PCs are given modern upgrades?'},
    {img: 'assets/images/image-top-laptops.jpg', number: '02', title: 'Top 10 Laptops of 2022', paragraph: 'Our best picks for various needs and budgets.'},
    {img: 'assets/images/image-gaming-growth.jpg', number: '03', title: 'The Growth of Gaming', paragraph: 'How the pandemic has sparked fresh opportunities.'},
  ]
}
