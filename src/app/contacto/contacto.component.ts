import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  
  public user: Usuario;

  constructor() { 
    // this.user = {nombreCompleto:'juan',correo:'juan',telefono: 12};

    this.user =  new Usuario('Leoneider',
                       'Prueba@hotmail.com',
                       0
                       );
  }

  ngOnInit() {
  }

}
