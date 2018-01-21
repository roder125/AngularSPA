import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import $ = require("jquery");

@Component({
  selector: 'app-main-image',
  templateUrl: './main-image.component.html',
  styleUrls: ['./main-image.component.css']
})
export class MainImageComponent implements OnInit {

  //@Input() imgHeightEvent = new EventEmitter<number>();
  @Output() imgHeightEvent : EventEmitter<number>;
  height: number;

  constructor(private el: ElementRef) {
    this.imgHeightEvent = new EventEmitter<number>();
  }

  ngOnInit() {

  }

  ngAfterViewInit(){

    var _height;
    $(document).ready(function() {
      $("img").each(function() {
          console.log("main Image C " + $(this).height());
          _height =  $(this).height();
          //console.log($(this).width());
      });
      console.log("Parameter: " + _height);  
    });
    this.imgHeightEvent.emit(_height);
    console.log("_height " + _height)
  }

  ngAfterViewChecked(){
  }

  
}
