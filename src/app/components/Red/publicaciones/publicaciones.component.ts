import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-publicaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  publicaciones: any[] = [];
  nuevaPublicacion: string = '';
  imagenPerfil: string = '';

  ngOnInit() {
    const guardadas = localStorage.getItem('publicaciones');
    if (guardadas) {
      this.publicaciones = JSON.parse(guardadas);
    }

    const imagenGuardada = localStorage.getItem('imagenPerfil');
    if (imagenGuardada) {
      this.imagenPerfil = imagenGuardada;
    }
  }

  subirImagen(event: any) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagenPerfil = reader.result as string;
      localStorage.setItem('imagenPerfil', this.imagenPerfil);
    };
    reader.readAsDataURL(file);
  }

  publicar() {
    if (!this.nuevaPublicacion.trim()) return;

    const nueva = {
      autor: 'Usuario Anónimo',
      mensaje: this.nuevaPublicacion,
      fecha: new Date().toLocaleString(),
      imagen: this.imagenPerfil
    };

    this.publicaciones.unshift(nueva);
    localStorage.setItem('publicaciones', JSON.stringify(this.publicaciones));
    this.nuevaPublicacion = '';
  }
}