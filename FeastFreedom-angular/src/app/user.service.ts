import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from './user';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url: string = "";
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }
  
  getUsersById(id: number): Observable<User[]>{
    return this.http.get<User[]>(this._url + '/' + id)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
  postUser(empData): Observable<User[]>{
    return this.http.post<User[]>(this._url, empData)
    .pipe(catchError(this.errorHandler));
  }
  
  updateUser(id: number, empData): Observable<User[]>{
    console.log(empData)
    console.log(this._url + '/' + id)
    return this.http.put<User[]>(this._url + '/' + id, empData)
    .pipe(catchError(this.errorHandler));
  }

  deleteUser(id) {
    return this.http.delete(this._url + '/' + id);
  }
}
