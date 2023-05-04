import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-library-gallery',
  templateUrl: './library-gallery.component.html',
  styleUrls: ['./library-gallery.component.sass']
})
export class LibraryGalleryComponent implements OnInit{
    data
    constructor(
        private bookService: BookService
    ){}
    ngOnInit() {
        this.bookService.getAllBooks().subscribe((s) => {
            this.data = s.books
            console.log(s.books)
        })  
    }
}
