import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { LibraryPageComponent } from './pages/library-page/library-page.component';

const routes: Routes = [
    {path: '', redirectTo: "/library", pathMatch: "full"},
    {path: 'list', component: ListPageComponent},
    {path: 'library', component: LibraryPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
