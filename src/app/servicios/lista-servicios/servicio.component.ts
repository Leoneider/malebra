import { Component, OnInit } from '@angular/core';
import { Servicio } from '../../models/servicio';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styles: []
})
export class ServicioComponent implements OnInit {

  servicio: Servicio = {
    icono: 'pe-7s-note2',
    titulo: 'PRUEBA',
    descripcion: 'We create a persona regarding the multiple wardrobe accessories that we provide..'
  };

  servicios: Servicio[] = [
    { icono: 'pe-7s-note2', titulo: 'Inclusión', descripcion: 'We create a persona regarding the multiple wardrobe accessories that we provide..' },
    { icono: 'pe-7s-note2', titulo: 'Confianza', descripcion: 'Dos create a persona regarding the multiple wardrobe accessories that we provide..' },
    { icono: 'pe-7s-note2', titulo: 'Seguridad', descripcion: ' hkjj create a persona regarding the multiple wardrobe accessories that we provide..' }
  ]
 
  constructor() { }

  ngOnInit() {
  }

}
