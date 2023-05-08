import { Component } from '@angular/core';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.sass']
})
export class LibraryPageComponent {
    tab: string = "Library"
    add
    handleClick() {
        this.add = true
    }
    async handleClose(): Promise<void>{
        this.add = false
    }
}
