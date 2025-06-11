import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Mensaje {
  de: 'yo' | 'otro';
  texto: string;
  hora: string;
}

interface Conversacion {
  id: number;
  nombre: string;
  perfilUrl: string;
  mensajes: Mensaje[];
}

@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent {
  conversaciones: Conversacion[] = [];
  conversacionSeleccionada: Conversacion | null = null;

  nombres = [
    'Sofía', 'Mateo', 'Valentina', 'Lucas', 'Isabella',
    'Diego', 'Camila', 'Samuel', 'Martina', 'Nicolás',
    'Emma', 'Alejandro', 'Julia', 'Daniel', 'Victoria',
    'Gabriel', 'Ana', 'Sebastián', 'Laura', 'Miguel'
  ];

  mensajesPosibles = [
    'Hola, ¿cómo estás?',
    '¿Qué haces?',
    '¿Nos vemos luego?',
    'Estoy ocupado ahora.',
    '¡Eso fue genial!',
    '¿Ya comiste?',
    'Vamos a salir hoy.',
    '¿Qué opinas de eso?',
    'Te escribo más tarde.',
    'Fue un buen día.'
  ];

  constructor() {
    this.generarConversaciones();
  }

  generarConversaciones() {
    for (let i = 0; i < this.nombres.length; i++) {
      const nombre = this.nombres[i];
      const perfilUrl =
        i % 2 === 0
          ? `https://randomuser.me/api/portraits/women/${i}.jpg`
          : `https://randomuser.me/api/portraits/men/${i}.jpg`;

      const mensajes: Mensaje[] = [];
      const cantidadMensajes = this.numeroAleatorio(3, 6);
      for (let j = 0; j < cantidadMensajes; j++) {
        const de: 'yo' | 'otro' = j % 2 === 0 ? 'otro' : 'yo';
        const texto = this.mensajesPosibles[this.numeroAleatorio(0, this.mensajesPosibles.length - 1)];
        const hora = this.generarHoraAleatoria();
        mensajes.push({ de, texto, hora });
      }

      this.conversaciones.push({
        id: i + 1,
        nombre,
        perfilUrl,
        mensajes
      });
    }
  }

  numeroAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generarHoraAleatoria(): string {
    const horas = this.numeroAleatorio(8, 22);
    const minutos = this.numeroAleatorio(0, 59);
    const horaFormateada = `${horas}:${minutos.toString().padStart(2, '0')}`;
    return `${horaFormateada}`;
  }

  seleccionarConversacion(conversacion: Conversacion) {
    this.conversacionSeleccionada = conversacion;
  }
}
