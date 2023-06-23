import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  login = (credentials: any): Observable<any> => { return null; }
  signUp = (credentials: any): Observable<any> => { return null; }
}
