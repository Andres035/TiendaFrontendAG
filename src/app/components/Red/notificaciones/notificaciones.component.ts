import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface Notificacion {
  id: number;
  tipo: 'mensaje' | 'me-gusta' | 'solicitud-amistad' | 'otro';
  usuario: string;  // Nombre de quien genera la notificación
  perfilUrl?: string; // URL de foto de perfil
  texto: string;    // Texto corto resumen
  mensajeCompleto?: string; // Solo para tipo mensaje
  leida?: boolean;  // Para marcar si se leyó el mensaje
  fecha: string;    // Fecha o tiempo
}

@Component({
  selector: 'app-notificaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notificaciones.component.html',
  styleUrl: './notificaciones.component.css'
})
export class NotificacionesComponent {
  notificaciones = [
    {
      id: 1,
      tipo: 'mensaje',
      usuario: 'Ana Gómez',
      perfilUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      texto: 'Te envió un mensaje',
      mensajeCompleto: 'Hola, ¿cómo estás? Quería saber si te gustaría salir este fin de semana.',
      leida: false,
      fecha: 'Hace 2 horas'
    },
    {
      id: 2,
      tipo: 'me-gusta',
      usuario: 'Carlos Pérez',
      perfilUrl: 'https://randomuser.me/api/portraits/men/46.jpg',
      texto: 'Le gustó tu publicación',
      fecha: 'Hace 1 día'
    },
    {
      id: 3,
      tipo: 'solicitud-amistad',
      usuario: 'Laura Martínez',
      perfilUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
      texto: 'Te envió una solicitud de amistad',
      fecha: 'Hace 3 días'
    },
    {
      id: 4,
      tipo: 'otro',
      usuario: 'Sistema',
      perfilUrl: '',
      texto: 'Tu contraseña se actualizó correctamente',
      fecha: 'Hace 1 semana'
    }
  ];

  // Guardar ID notificación de mensaje expandido para mostrar mensaje completo
  mensajeAbiertoId: number | null = null;

  toggleMensaje(id: number) {
    if (this.mensajeAbiertoId === id) {
      this.mensajeAbiertoId = null;
    } else {
      this.mensajeAbiertoId = id;
      // Opcional: marcar como leída
      const noti = this.notificaciones.find(n => n.id === id);
      if (noti && noti.tipo === 'mensaje') {
        noti.leida = true;
      }
    }
  }
}