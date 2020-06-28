import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable , throwError } from 'rxjs';
import { Kitchen } from './kitchen';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {

  private _url: string = "http://localhost:3000/kitchens";
  constructor(private http: HttpClient) { }

  getKitchens(): Observable<Kitchen[]>{
    return this.http.get<Kitchen[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }
  
  getKitchensById(id: number): Observable<Kitchen[]>{
    return this.http.get<Kitchen[]>(this._url + '/' + id)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
  postKitchen(empData): Observable<Kitchen[]>{
    return this.http.post<Kitchen[]>(this._url, empData)
    .pipe(catchError(this.errorHandler));
  }
  
  updateKitchen(id: number, empData): Observable<Kitchen[]>{
    console.log(empData)
    console.log(this._url + '/' + id)
    return this.http.put<Kitchen[]>(this._url + '/' + id, empData)
    .pipe(catchError(this.errorHandler));
  }

  deleteKitchen(id) {
    return this.http.delete(this._url + '/' + id);
  }
}
