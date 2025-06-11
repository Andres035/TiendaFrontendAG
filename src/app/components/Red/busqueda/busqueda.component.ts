import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Usuario {
  nombre: string;
  perfilUrl: string;
  ubicacion: string;
}

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  usuarios: Usuario[] = [];
  filtro: string = '';

  nombres = [
    'Sofía', 'Mateo', 'Valentina', 'Lucas', 'Isabella',
    'Diego', 'Camila', 'Samuel', 'Martina', 'Nicolás',
    'Emma', 'Alejandro', 'Julia', 'Daniel', 'Victoria',
    'Gabriel', 'Ana', 'Sebastián', 'Laura', 'Miguel'
  ];

  constructor() {
    this.usuarios = this.nombres.map((nombre, i) => ({
      nombre,
      perfilUrl: i % 2 === 0
        ? `https://randomuser.me/api/portraits/women/${i}.jpg`
        : `https://randomuser.me/api/portraits/men/${i}.jpg`,
      ubicacion: 'Bolivia'
    }));
  }

  get usuariosFiltrados(): Usuario[] {
    return this.usuarios.filter(usuario =>
      usuario.nombre.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
}
