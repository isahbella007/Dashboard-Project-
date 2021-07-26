import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  showErroMessage!:boolean

  constructor(private noteService:NoteService, private router:Router) { }

  ngOnInit(): void {
  }

  addNotes(notesAdded:NgForm){

    if(notesAdded.invalid){
      this.showErroMessage = true
      return
    }else
      var note = new Note(notesAdded.value.title, notesAdded.value.content )
      this.noteService.addNotes(note)
      this.router.navigateByUrl('/notes')
  }
}
