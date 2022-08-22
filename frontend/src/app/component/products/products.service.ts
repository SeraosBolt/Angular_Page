import { Product } from './products.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

//DENTOR DO SERVICE DEIXAMOS A MAIOR PARTE DA NOSSA LOGICA

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = 'http://localhost:3001/products'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  //AQUI PODEMOS CRIAR UMA FUNÇÃO PARA EXIBIR UMA MENSAGEM EM POP-UP 
  showMenssage(msg: string): void {
    this.snackBar.open(msg,'X',{
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }
  createProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl,product)
  }
  readProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }


}
