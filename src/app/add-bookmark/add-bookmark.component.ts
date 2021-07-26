import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bookmark } from '../shared/bookmark.model';
import { BookmarkService } from '../shared/bookmark.service';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {

  constructor(private bookmarkService:BookmarkService, private route: Router) { }

  ngOnInit(): void {
  }
  addBookmark(form:NgForm){
    const bookmarkToAdd = new Bookmark(form.value.name, form.value.url)
    this.bookmarkService.addBookmark(bookmarkToAdd)
    console.log(form.value)
    this.route.navigateByUrl("/bookmarks")
  }

}
