import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  public getUsersLists(id){
    return this.http.get<any>(`https://jgmainapi.azurewebsites.net/list/userlists?id=${id}`)
  }
  public getList(id){
    return this.http.get<any>(`https://jgmainapi.azurewebsites.net/list/getlist?id=${id}`)
  }
}
