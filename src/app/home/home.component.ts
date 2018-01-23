import { Component, OnInit} from '@angular/core';

import $ = require("jquery");

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() {  }

  ngOnInit() {
    this.navbarChange() ;
  }

  /**
   * Ändert das design der Navbar, sobal über die höhe des main Images gescrollt wird
   */
  navbarChange(){
    var _height;
    $(document).ready(function() {
      $( "nav" ).addClass( "navbar-default");
      $("#imageId").each(function() {
        _height =  $(this).height();
      });
      $(window).scroll(function(){
        if ($(this).scrollTop() >= _height - 10) {
          //$('nav').css("background-color", "#fff");
          $( "nav" ).addClass( "navbar-inverse");
          $( "nav" ).removeClass( "navbar-default");  
        } else {
          //$('nav').css("background-color", "transparent");
          $( "nav" ).removeClass( "navbar-inverse");
          $( "nav" ).addClass( "navbar-default");          
        }
      });
      //$('nav').css("background-color", "transparent");
      var winHeight  = $(window).height();     
      var winWidth  = $(window).width();
      // Wenn die größe des Fensters geändert wird, wird die Höhe des Bildes neu berechnet
      $(window).resize(function() {
        if(winHeight != $(window).height() || winWidth != $(window).width()){
          $( "nav" ).addClass( "navbar-default");
          $("#imageId").each(function() {
            _height =  $(this).height();
          });
          $(window).scroll(function(){
            if ($(this).scrollTop() >= _height - 10) {
              //$('nav').css("background-color", "#fff");
              $( "nav" ).addClass( "navbar-inverse");
              $( "nav" ).removeClass( "navbar-default");
            } else {
              //$('nav').css("background-color", "transparent");
              $( "nav" ).removeClass( "navbar-inverse");
              $( "nav" ).addClass( "navbar-default");          
            }
          });
        }
      });   
    });
  }

  /**
   * Animation für das Navigieren in der Page
   * @param destination 
   */
  navClick(destination: string){
    console.log("click " + destination)

      // store hash
      var dest = "#" + destination;
		  var $root = $('html, body');

      var href = "#" + destination;
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
			return false;
  } 
}
