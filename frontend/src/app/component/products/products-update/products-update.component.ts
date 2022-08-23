import { Product } from './../products.model';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-update',
  templateUrl: './products-update.component.html',
  styleUrls: ['./products-update.component.css']
})
export class ProductsUpdateComponent implements OnInit {
  product: Product

  constructor(
    private prod_serv: ProductsService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id')
    this.prod_serv.readById(id).subscribe(product =>{
      this.product = product
    })
  }
  updateProduct(): void{
    this.prod_serv.update(this.product).subscribe(()=>{
      this.prod_serv.showMenssage('Produto Atualizado com sucessso!')
      this.router.navigate(['/products'])
    })
  }
  cancel():void {
    this.router.navigate(['/products'])
  }
  
}
