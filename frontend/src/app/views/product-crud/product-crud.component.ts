import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  createProducts(){
    console.log('Indo criar componentes')
    this.router.navigate(['/products/create'])
  }
}
