import { Component, EventEmitter, Input, Output } from '@angular/core';
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

    @Output() whenClose = new EventEmitter()
    
    book = {
        title: "",
        author: "",
        pageCount: "",
        coverImg: "",
        publishDate: "",
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
    handleClosed(){
        this.whenClose.emit()
    }
}
