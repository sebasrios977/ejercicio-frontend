import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'magazine',
    loadChildren: () => import('./magazine/magazine.module').then(m => m.MagazineModule)
  },
  {
    path: '**',
    redirectTo: 'magazine',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
