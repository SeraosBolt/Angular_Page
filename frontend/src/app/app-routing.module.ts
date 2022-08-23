import { ProductsDeleteComponent } from './component/products/products-delete/products-delete.component';
import { ProductsUpdateComponent } from './component/products/products-update/products-update.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsCreateComponent } from './component/products/products-create/products-create.component';
import {HomeComponent} from './views/home/home.component'
import {ProductCrudComponent} from './views/product-crud/product-crud.component'

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
  },
  {
    path: 'products',
    component: ProductCrudComponent
  },
  {
    path: 'products/create',
    component: ProductsCreateComponent
  },
  {
    path: 'products/update/:id',
    component: ProductsUpdateComponent
  },
  {
    path: 'products/delete/:id',
    component: ProductsDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
