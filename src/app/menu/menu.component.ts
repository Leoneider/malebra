import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  title = 'Malebra LTDA'
  
  constructor() { }

  ngOnInit() {
    console.log($(window).scrollTop());
    
    // MANEJA EL SCROLL DEL MENU
    $(window).scroll(function() {
     let height = $(window).scrollTop();
      if (height > 40) { 
          $("#menu").addClass("bg-inverse");
      } else {
          $("#menu").removeClass("bg-inverse");
      }
    });
  
    
  }

}
