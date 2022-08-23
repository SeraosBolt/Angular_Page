import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from './../products.service';
import { Product } from './../products.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.css']
})
export class ProductsDeleteComponent implements OnInit {
  product: Product
  constructor(private prod_serv: ProductsService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id')
    this.prod_serv.readById(id).subscribe(produto =>{
      this.product = produto
    })
  
  }

  deleteProduct(){
    this.prod_serv.delete(this.product.id).subscribe(() =>{
      this.prod_serv.showMenssage("Produto excluido com sucesso!")
      this.router.navigate(['/products'])
    })
  }
  cancel(){
    this.router.navigate(['/products'])
  }

}
