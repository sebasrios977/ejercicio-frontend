import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MagazineRoutingModule } from './magazine-routing.module';
import { ViewComponent } from './view/view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NewComponent } from './components/new/new.component';
import { PopularComponent } from './components/popular/popular.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    ViewComponent,
    NavbarComponent,
    HomeComponent,
    NewComponent,
    PopularComponent,
    CategoriesComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MagazineRoutingModule
  ]
})
export class MagazineModule { }
