import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  public createBook(book){
    return this.http.post<any>(`https://jgmainapi.azurewebsites.net/book/create`, {
        title: book.title,
        author: book.author,
        pageCount: parseInt(book.pageCount),
        coverImg: book.coverImg,
        publishDate: book.publishDate,
        seriesName: book.seriesName,
        seriesNumber: book.seriesNumber,
        genre: book.genre,
        publisher: book.publisher
    })
  }
  public getAllBooks(){
    return this.http.get<any>(`https://jgmainapi.azurewebsites.net/book/getAll`)
  }

}
