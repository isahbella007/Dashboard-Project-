import { not } from '@angular/compiler/src/output/output_ast';
import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService implements OnDestroy{

  notes:  Note[]  = [];
  
  storageListenSub: Subscription

  constructor() { 
    // lolad state from loacl storage
    this.loadState()
    // listen to local storage event
    this.storageListenSub = fromEvent(window , 'storage').subscribe((event: StorageEvent) =>{
      if(event.key == 'notes'){
        this.loadState()
      }
    })
  }

  ngOnDestroy(){
    if(this.storageListenSub)
      this.storageListenSub.unsubscribe()
  }

  getNotes(){
    return this.notes
  }

  getNote(id:string | null){
    const note = this.notes.find(n => n.id == id)
    return note
  }

  addNotes(note:Note){
    this.notes.push(note)
    this.saveState()
  }

    // do not really understand this one 
  updateNote(id:string, updateFields: Partial<Note>){
    const note = this.getNote(id)
    Object.assign(note, updateFields)

    this.saveState()
  }

  deleteNote(id:string){
    // find the index 
    const noteIndex = this.notes.findIndex(n => n.id == id)
    if(noteIndex == -1) return


    this.notes.splice(noteIndex, 1)
    this.saveState()
  }

  saveState(){
    // convert note array into  local string so that it will be saved into local array
    localStorage.setItem('notes', JSON.stringify(this.notes))
  }

  loadState(){
    try{
      const notesInStorage = JSON.parse(localStorage.getItem("notes"));
      this.notes.length = 0 
      this.notes.push(...notesInStorage)
    }catch(e){
      console.log("There was an error reteriving notes from local storage")
      console.log(e)
    }
    
    
  }
}
