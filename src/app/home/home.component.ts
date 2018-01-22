import { Component, OnInit} from '@angular/core';

import $ = require("jquery");

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.navbarChange() ;
  }

  navbarChange(){
    var _height;
    $(document).ready(function() {
      //$('nav').css("background-color", "transparent");
      $( "nav" ).addClass( "navbar-default");
      $("img").each(function() {
          console.log("main Image height " + $(this).height());
           _height =  $(this).height();
          //console.log($(this).width());
      });
      $(window).scroll(function(){
        if ($(this).scrollTop() >= _height) {
          //$('nav').css("background-color", "#fff");
          $( "nav" ).addClass( "navbar-inverse");
          $( "nav" ).removeClass( "navbar-default");
          console.log("end of img")
        } else {
          //$('nav').css("background-color", "transparent");
          $( "nav" ).removeClass( "navbar-inverse");
          $( "nav" ).addClass( "navbar-default");          
        }
      });
      console.log("Parameter: " + _height);
    });
  }
  
}
