import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main-image',
  templateUrl: './main-image.component.html',
  styleUrls: ['./main-image.component.css']
})
export class MainImageComponent implements OnInit {

  @ViewChild('mainImage') imageRef: ElementRef;

  constructor() { 
    
  }

  ngOnInit() {
  }

  
  ngAfterViewInit(){
    //console.log(document.getElementById('mainImage'));
    var height = this.imageRef.nativeElement.offsetHeight;
    console.log(height);
  }

  
}
