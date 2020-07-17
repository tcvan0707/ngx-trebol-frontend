import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreCartComponent } from './routes/cart/store-cart.component';
import { StoreCatalogComponent } from './routes/catalog/store-catalog.component';
import { StoreComponent } from './store.component';

const storeRoutes: Routes = [
  {
    path: 'store', component: StoreComponent,
    children: [
      { path: '', component: StoreCatalogComponent },
      { path: 'cart', component: StoreCartComponent },
      { path: '**', pathMatch: 'prefix', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(storeRoutes)
  ],
  exports: [RouterModule]
})
export class StoreRoutingModule { }