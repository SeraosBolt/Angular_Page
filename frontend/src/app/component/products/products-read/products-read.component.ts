import { Component, OnInit } from '@angular/core';
import { Product } from '../products.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-read',
  templateUrl: './products-read.component.html',
  styleUrls: ['./products-read.component.css']
})
export class ProductsReadComponent implements OnInit {

  products: Product[] = []

  constructor(private product_service: ProductsService) { }

  ngOnInit(): void {
    this.product_service.readProduct().subscribe(resul=>{
      this.products = resul
      console.log(this.products)
    })
  } 

}
