import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-edit-book-menu',
  templateUrl: './edit-book-menu.component.html',
  styleUrls: ['./edit-book-menu.component.sass']
})
export class EditBookMenuComponent implements OnInit{
    constructor(
        private bookService: BookService
    ){}
    @Input() book
    @Output() whenClose = new EventEmitter()
    
    
    ngOnInit(): void {
        console.log(this.book)
    }
    handleSubmit(title, author, pageCount, publisher, publishDate, genre, coverImg, seriesName, seriesNumber){
        let newBook = {
            id: this.book.id,
            title: title,
            author: author,
            pageCount: pageCount,
            coverImg: coverImg,
            publishDate: publishDate,
            seriesName: seriesName,
            seriesNumber: seriesNumber,
            genre: genre,
            publisher: publisher
        }
        console.log(newBook)
        this.bookService.updateBook(newBook).subscribe((s) => {
            console.log(s)
        })
        
    }
    handleClosed(){
        this.whenClose.emit()
    }
}
