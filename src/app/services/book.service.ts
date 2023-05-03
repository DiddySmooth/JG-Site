import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  public createBook(book){
    return this.http.post<any>(`http://localhost:3000/book/create`, {
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
}
