import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { LibraryPageComponent } from './pages/library-page/library-page.component';
import { AddBookMenuComponent } from './components/add-book-menu/add-book-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { LibraryGalleryComponent } from './components/library-gallery/library-gallery.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { EditBookMenuComponent } from './components/edit-book-menu/edit-book-menu.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DragDropModule} from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    LibraryPageComponent,
    AddBookMenuComponent,
    LibraryGalleryComponent,
    EditBookMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatCheckboxModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
