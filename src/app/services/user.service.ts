import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  public getAllUsers(){
    return this.http.get<any>(`https://jgmainapi.azurewebsites.net/user/getAll`)
  }
}
