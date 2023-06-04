import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListService } from 'src/app/services/list.service';
import { UserService } from 'src/app/services/user.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.sass']
})
export class ListPageComponent implements OnInit{
    users
    userLists
    constructor(private listService:  ListService, private userService: UserService){}
    currentUser
    books
    ngOnInit(): void {
        this.userService.getAllUsers().subscribe((s => {
            console.log(s.users)
            this.users = s.users
            this.handleUserSelect(s.users.find(f => f.id == localStorage.getItem("user")))
            console.log(s.users.find(f => f.id == localStorage.getItem("user")))
        }))
        if(localStorage.getItem("list")){
            var list = {
                id: localStorage.getItem("list")
            }
            this.handleListSelect(list)
        }
    }
    myControl = new FormControl('');

    handleUserSelect(user){
        this.currentUser = user.name 
        this.listService.getUsersLists(user.id).subscribe((s => {
            this.userLists = s
        }))
    }
    handleListSelect(list){
        window.localStorage.setItem("list", list.id)
        this.listService.getList(list.id).subscribe((s => {
            this.books = s.map(obj => ({...obj, expanded: false}))
        }))
    }
    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.books, event.previousIndex, event.currentIndex);
        console.log(this.books)
        this.books.forEach((book, index) => book.index = index + 1)
    }
    onSave(){
        let saveList = []
        this.books.forEach((book) => {
            let update = {
                id: book.id,
                index: book.index
            }
            saveList.push(update)
        })
        console.log(saveList)
        this.listService.updateOrder(saveList).subscribe()
    }
    itemClicked(book){
        console.log(book)
        if(!book){
            console.log("Working")
        }
        let list = document.getElementById(book)
        console.log(list)
    }
}
