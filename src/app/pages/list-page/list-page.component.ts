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
        }))
    }
    myControl = new FormControl('');
    handleUserSelect(user){
        this.currentUser = user.name 
        this.listService.getUsersLists(user.id).subscribe((s => {
            console.log(s)
            this.userLists = s
        }))
    }
    handleListSelect(list){
        console.log(list)
        this.listService.getList(list.id).subscribe((s => {
            console.log(s)
            this.books = s
        }))
    }
    drop(event) {
        moveItemInArray(this.books, event.previousIndex, event.currentIndex);
      }

}
