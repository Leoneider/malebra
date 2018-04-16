import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-interno',
  templateUrl: './menu-interno.component.html',
  styleUrls: ['./menu-interno.component.css']
})
export class MenuInternoComponent implements OnInit {

  constructor() { 

    


  }

  ngOnInit() {

    // MANEJA EL SCROLL DEL MENU
    // $(window).scroll(function() {
    //   let height = $(window).scrollTop();
    //    if (height > 40) { 
    //        $("#menu").addClass("bg-inverse");
    //    } else {
    //        $("#menu").removeClass("bg-inverse");
    //    }
    //  });
 
  }

}
