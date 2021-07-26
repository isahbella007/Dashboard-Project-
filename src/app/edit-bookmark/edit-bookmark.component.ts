import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Bookmark } from '../shared/bookmark.model';
import { BookmarkService } from '../shared/bookmark.service';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss']
})
export class EditBookmarkComponent implements OnInit {

  bookmark!: any

  constructor(private bookmarkService: BookmarkService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:ParamMap) =>{
      var bookmarkIndex = paramMap.get('id')
      this.bookmark = this.bookmarkService.getBookmark(bookmarkIndex)
    })
  }

  editBookmark(form:NgForm){
    this.bookmarkService.updateBokmark(this.bookmark.id, form.value)
    this.router.navigateByUrl("/bookmarks")
  }

  deleteFunction(){
    this.bookmarkService.deleteBookmark(this.bookmark.id)
    this.router.navigate(['../'], { relativeTo: this.route})
  }

}
