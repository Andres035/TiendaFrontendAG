import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Amigo {
  nombre: string;
  perfilUrl: string;
  ubicacion: string;
}

@Component({
  selector: 'app-amigos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.css']
})
export class AmigosComponent {
  amigos: Amigo[] = [];

  nombres = [
    'Sofía', 'Mateo', 'Valentina', 'Lucas', 'Isabella',
    'Diego', 'Camila', 'Samuel', 'Martina', 'Nicolás',
    'Emma', 'Alejandro', 'Julia', 'Daniel', 'Victoria',
    'Gabriel', 'Ana', 'Sebastián', 'Laura', 'Miguel'
  ];

  constructor() {
    this.amigos = this.nombres.map((nombre, i) => ({
      nombre,
      perfilUrl: i % 2 === 0
        ? `https://randomuser.me/api/portraits/women/${i}.jpg`
        : `https://randomuser.me/api/portraits/men/${i}.jpg`,
      ubicacion: 'Bolivia'
    }));
  }
}
