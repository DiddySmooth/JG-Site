import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ListService {

    constructor(private http: HttpClient) { }

    public getUsersLists(id) {
        return this.http.get<any>(`https://jgmainapi.azurewebsites.net/list/userlists?id=${id}`)
    }
    public getList(id) {
        return this.http.get<any>(`https://jgmainapi.azurewebsites.net/list/getlist?id=${id}`)
    }
    public addToList(bookId, listId, raiting, audioBook, index) {
        return this.http.post<any>(`https://jgmainapi.azurewebsites.net/list/add`, {
            bookId: bookId,
            listId: listId,
            index: index,
            raiting: raiting,
            audioBook: audioBook
        })
    }
    public addRead(bookListId, startDate, endDate){
        return this.http.post<any>(`https://jgmainapi.azurewebsites.net/list/addread`, {
            bookListId: bookListId,
            startDate: startDate,
            endDate: endDate
        })
    }
}
