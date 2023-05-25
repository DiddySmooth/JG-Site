import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { ListService } from 'src/app/services/list.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-library-gallery',
  templateUrl: './library-gallery.component.html',
  styleUrls: ['./library-gallery.component.sass']
})
export class LibraryGalleryComponent implements OnInit{
    data
    currentBook
    users
    displayPopup = false
    displayAddMenu = false
    currentUser
    userLists
    list 
    bookToAdd
    audioBook = false
    raiting
    listLength
    startDate
    endDate
    constructor(
        private bookService: BookService,
        private userService: UserService,
        private listService: ListService
    ){}
    ngOnInit() {
        this.bookService.getAllBooks().subscribe((s) => {
            this.data = s.books
            console.log(s.books)
        })  
        this.userService.getAllUsers().subscribe((s => {
            console.log(s.users)
            this.users = s.users
        }))
    }
    handleClick(book){
        console.log(book)
        this.currentBook = book
        this.displayPopup = true
    }
    handleUserSelect(user){
        this.currentUser = user.name 
        this.listService.getUsersLists(user.id).subscribe((s => {
            console.log(s)
            this.userLists = s
        }))
    }
    async handleClose(): Promise<void>{
        this.displayPopup = false
    }
    openAddBook(book){
        this.displayAddMenu = true
        this.bookToAdd = book
    }
    pickList(list){
        this.list = list.id
        this.listService.getList(list.id).subscribe((s => {
            this.listLength = s.length
        }))
    }
    addBook(){
        console.log(this.audioBook, parseFloat(this.raiting), this.bookToAdd.id, this.list, this.listLength)
        this.listService.addToList(this.bookToAdd.id, this.list, this.raiting, this.audioBook, this.listLength).subscribe((s => {
            console.log(s)
            this.listService.addRead(s.id, this.startDate, this.endDate).subscribe((s) => {
                console.log(s)
            })
        }))
        this.closeAdd()
    }
    closeAdd(){
        this.displayAddMenu = false
    }
    
}
