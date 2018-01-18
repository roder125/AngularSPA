import { Component, OnInit, HostListener, Inject , ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }
  

  @HostListener("window:scroll", ['$event'])
  onWindowScroll($event) {
    //we'll do some stuff here when the window is scrolled
    console.log($event.target.documentElement.scrollTop);
    if($event.target.documentElement.scrollTop >= 930){
      console.log("BildEnde erreicht")
    }
  }

}
