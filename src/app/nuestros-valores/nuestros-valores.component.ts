import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuestros-valores',
  templateUrl: './nuestros-valores.component.html',
  styleUrls: ['./nuestros-valores.component.css']
})
export class NuestrosValoresComponent implements OnInit {
  clase:string = 'text'
  clases = 
    ['clase1',
    'text',
    'clase1',
    'text',
    'clase1',
    'text',
    'clase1']
  


  constructor() { }

  ngOnInit() {
  }

}
