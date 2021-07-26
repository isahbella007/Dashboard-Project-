import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
  animations: [
    
  ]
})

export class AppComponent implements OnInit{
  title = 'personal-dashboard';

  time!:Date;

  bg : string = 'https://images.unsplash.com/photo-1624900043694-4bd369e85a1f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjc3NzQyMA&ixlib=rb-1.2.1&q=80&w=1920'

  loadingbgImage: boolean

  constructor() {
    
  }

  ngOnInit(){
    timer(0,1000).subscribe( ()=>{
      this.time = new Date()
    })
  }

  async changeBgImage(){
    this.loadingbgImage = true
    const result =   await fetch('https://source.unsplash.com/random/1920x1080', {
      method: "HEAD"
    })

    // Make sure that the image gotten hasn't been rexeived before
    if(result.url == this.bg) return this.changeBgImage()
    this.bg = result.url
  }

  onBgImageLoad(){
    this.loadingbgImage = false
  }
  
  
}
