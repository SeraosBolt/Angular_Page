import { catchError, map } from 'rxjs/operators';
import { Product } from './products.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';

//DENTOR DO SERVICE DEIXAMOS A MAIOR PARTE DA NOSSA LOGICA

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = 'http://localhost:3001/products'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  //AQUI PODEMOS CRIAR UMA FUNÇÃO PARA EXIBIR UMA MENSAGEM EM POP-UP 
  showMenssage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg,'X',{
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error']: ['msg-success']
    })
  }
  
  createProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl,product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  readProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  readById(id: string): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  delete(id: any): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  errorHandler(e:any): Observable<any>{
    this.showMenssage("ALGO DEU ERRADO", true)
    return EMPTY
  }


}
