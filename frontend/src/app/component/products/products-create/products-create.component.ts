import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../products.model';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {
  //CRIANDO PRODUTO A SER INSERIDO NO NOSSO BANCO DE DADOS
    product: Product ={
      name: '',
      price: 0
    }



  //AQUI SOLICITAMOS AO ANGULAR PARA INJETAR NOSSOS SERVICES
  constructor(private product_service: ProductsService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(){
    //AQUI CHAMAMOS A FUNÇAO QUE FOI CRIADA EM NOSSO SERVICE
    this.product_service.createProduct(this.product).subscribe(()=>{
      this.product_service.showMenssage('Matheus deu bom criou um produto!')
      this.router.navigate(['/products'])
    })
    
  }
  cancel(){
    this.router.navigate(['/products'])
  }

}
