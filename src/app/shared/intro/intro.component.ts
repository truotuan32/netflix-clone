import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  @ViewChild('test', {read: ElementRef, static: true}) audioElement!:ElementRef;

  constructor(private readonly router:Router) { }

  ngOnInit(): void {
    // this.audioElement.nativeElement.play();
    this.playAudio();
    setTimeout(() => {
      this.router.navigate(['/home'])
    }, 5000)
  }

  @HostListener('mouseenter')
  playAudio(){
    this.audioElement.nativeElement.play();
  }

}
