import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _url: string = "http://localhost:3000/menus";
  constructor(private http: HttpClient) { }

  getMenus(): Observable<Menu[]>{
    return this.http.get<Menu[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }
  
  getKitchensById(id: number): Observable<Menu[]>{
    return this.http.get<Menu[]>(this._url + '/' + id)
    .pipe(catchError(this.errorHandler));
  }
  getMenusByKitchenId(id: number): Observable<Menu[]>{
    return this.http.get<Menu[]>(this._url + '/?kitchenid=' + id)
    .pipe(catchError(this.errorHandler));
  }
  getCartsByUserId(id: number): Observable<Menu[]>{
    return this.http.get<Menu[]>(this._url + '?userid=' + id)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
  postMenu(empData): Observable<Menu[]>{
    return this.http.post<Menu[]>(this._url, empData)
    .pipe(catchError(this.errorHandler));
  }
  
  updateKitchen(id: number, empData): Observable<Menu[]>{
    console.log(empData)
    console.log(this._url + '/' + id)
    return this.http.put<Menu[]>(this._url + '/' + id, empData)
    .pipe(catchError(this.errorHandler));
  }

  deleteKitchen(id) {
    return this.http.delete(this._url + '/' + id);
  }
}
