import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { EditBookmarkComponent } from './edit-bookmark/edit-bookmark.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { ManageBookmarksComponent } from './manage-bookmarks/manage-bookmarks.component';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path: 'bookmarks', component:BookmarksComponent},
  {path: 'bookmarks/add', component:AddBookmarkComponent}, 
  {path: 'bookmarks/manage', component:ManageBookmarksComponent, children:[
    {path: ':id', component:EditBookmarkComponent}
  ]}, 
  {path: 'todos', component:TodosComponent},
  {path: 'notes', component:NotesComponent}, 
  {path: 'notes/add', component: AddNoteComponent}, 
  {path: 'notes/:id', component:EditNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
