import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
 
  note!:any
  constructor(private route :ActivatedRoute, private noteService :NoteService, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap )=>{
      var idParam = paramMap.get('id')
      
      // get the items that have the id  clicked on
      this.note = this.noteService.getNote(idParam);
      console.log(this.note)
    })
     
    
  }

  EditForm(form:NgForm){
    this.noteService.updateNote(this.note.id, form.value)
    this.router.navigateByUrl("/notes")
  }

  deleteNote(){
   this.noteService.deleteNote(this.note.id)
   this.router.navigateByUrl("/notes")
  }

}


