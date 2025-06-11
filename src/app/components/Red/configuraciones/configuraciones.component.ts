import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-configuraciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './configuraciones.component.html',
  styleUrls: ['./configuraciones.component.css']
})
export class ConfiguracionesComponent {
  nombre: string = 'Juan Pérez';
  correo: string = 'juan@example.com';
  idioma: string = 'es';
  recibirNotificaciones: boolean = true;
  perfilPrivado: boolean = false;
}
