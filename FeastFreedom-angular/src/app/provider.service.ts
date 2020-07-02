import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Provider } from './provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private _url: string = "http://localhost:3000/providers";
  constructor(private http: HttpClient) { }

  getProviders(): Observable<Provider[]>{
    return this.http.get<Provider[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }
  
  getProviderById(id: number): Observable<Provider[]>{
    return this.http.get<Provider[]>(this._url + '/' + id)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
  postProvider(empData): Observable<Provider[]>{
    return this.http.post<Provider[]>(this._url, empData)
    .pipe(catchError(this.errorHandler));
  }
  
  updateProvider(id: number, empData): Observable<Provider[]>{
    console.log(empData)
    console.log(this._url + '/' + id)
    return this.http.put<Provider[]>(this._url + '/' + id, empData)
    .pipe(catchError(this.errorHandler));
  }

  deleteProvider(id) {
    return this.http.delete(this._url + '/' + id);
  }
}
