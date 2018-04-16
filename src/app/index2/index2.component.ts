import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index2',
  templateUrl: './index2.component.html',
  styleUrls: ['./index2.component.css']
})
export class Index2Component implements OnInit {

  constructor() {
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

  ngOnInit() {
    // $('body').css('background','blue')
   
    



  }

}
