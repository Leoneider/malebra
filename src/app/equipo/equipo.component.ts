import { Component, OnInit } from '@angular/core';
import { Equipo } from '../models/equipo';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  public miembros:Equipo[];

  constructor() {
    this.miembros = [
      { nombre: 'Leoneider Trigos', cargo: 'Dirección Comercial', destrezas: 'Desarrollar soluciones creativas, de acuerdo con la revisión que se realizan a las experiencias de los clientes.',urlFondo: 'assets/img/equipo-trabajo/rotating_card_thumb.jpg',urlPerfil: 'assets/img/equipo-trabajo/rotating_card_profile.jpg' },
      { nombre: 'Marisangel Quintero', cargo: 'Gerente General', destrezas: 'Poner en marcha ciclos de descubrimiento y validación de ideas innovadoras con los clientes.',urlFondo: 'assets/img/equipo-trabajo/rotating_card_thumb.jpg',urlPerfil: 'assets/img/equipo-trabajo/maris.jpg' },
      { nombre: 'Brahjan Jose', cargo: 'Director Ejecutivo', destrezas: 'Supervisar, analizar y comunicar a la alta gerencia las métricas de innovación para buscar oportunidades que promuevan crecimiento.',urlFondo: 'assets/img/equipo-trabajo/rotating_card_thumb.jpg',urlPerfil: 'assets/img/equipo-trabajo/brahjam.jpg' }
    ]

   }

  ngOnInit() {
  }

}
