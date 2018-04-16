import { Component, OnInit } from '@angular/core';
import { Valor } from '../models/valor';

@Component({
  selector: 'app-nuestros-valores',
  templateUrl: './nuestros-valores.component.html',
  styleUrls: ['./nuestros-valores.component.css']
})
export class NuestrosValoresComponent implements OnInit {


    public datos:Valor[];
  
  
   

  constructor() { 
    this.datos = [
      { clase: 'clase1', titulo: '', descripcion: '' },
      { clase: 'text', titulo: 'Inclusión', descripcion: 'Trabajamos con madres cabeza de hogar, victimas del conflicto y personas que llevan cualquier tipo de discapacidad fisica.' },
      { clase: 'clase2', titulo: '', descripcion: '' },
      { clase: 'text', titulo: 'Confianza', descripcion: 'Brindamos un entorno inclusivo, acogedor y enriquecedor para nuestros colegas y sus ideas.' },
      { clase: 'clase3', titulo: '', descripcion: '' },
      { clase: 'text', titulo: 'Seguridad', descripcion: 'Trabajamos con madres cabeza de hogar, victimas del conflicto y personas que llevan cualquier tipo de discapacidad fisica.' },
      { clase: 'clase4', titulo: '', descripcion: '' }
    ]
    // this.datos
  }

  ngOnInit() {
  }

}
