import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book-menu',
  templateUrl: './add-book-menu.component.html',
  styleUrls: ['./add-book-menu.component.sass']
})
export class AddBookMenuComponent {

    constructor(
        private bookService: BookService
    ){}
    book = {
        title: "",
        author: "",
        pageCount: "",
        coverImg: "",
        publishYear: "",
        seriesName: "",
        seriesNumber: "",
        genre: "",
        publisher: ""
    }
    handleSubmit(data: any){
        console.log(data)
        this.bookService.createBook(data).subscribe((s) => {
            console.log(s)
        })
    }
}
