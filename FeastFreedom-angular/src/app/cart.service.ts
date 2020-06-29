import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Cart } from './cart';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _url: string = "http://localhost:3000/carts";
  constructor(private http: HttpClient) { }

  getKitchens(): Observable<Cart[]>{
    return this.http.get<Cart[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }
  
  getKitchensById(id: number): Observable<Cart[]>{
    return this.http.get<Cart[]>(this._url + '/' + id)
    .pipe(catchError(this.errorHandler));
  }
  getCartsByUserId(id: number): Observable<Cart[]>{
    return this.http.get<Cart[]>(this._url + '?userid=' + id)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
  postCart(empData): Observable<Cart[]>{
    return this.http.post<Cart[]>(this._url, empData)
    .pipe(catchError(this.errorHandler));
  }
  
  updateKitchen(id: number, empData): Observable<Cart[]>{
    console.log(empData)
    console.log(this._url + '/' + id)
    return this.http.put<Cart[]>(this._url + '/' + id, empData)
    .pipe(catchError(this.errorHandler));
  }

  deleteKitchen(id) {
    return this.http.delete(this._url + '/' + id);
  }
}
