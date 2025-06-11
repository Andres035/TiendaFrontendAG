import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-historias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.css']
})
export class HistoriasComponent implements OnInit {
  historias: any[] = [];
  modalMedia: string | null = null;

  ngOnInit(): void {
    const guardadas = localStorage.getItem('historias');
    if (guardadas) {
      this.historias = JSON.parse(guardadas);
    }
  }

  subirHistoria(event: any): void {
    const archivo = event.target.files[0];
    if (!archivo) return;

    const lector = new FileReader();
    lector.onload = () => {
      const nuevaHistoria = {
        id: Date.now(),
        media: lector.result as string,
        fecha: new Date().toLocaleString()
      };

      this.historias.unshift(nuevaHistoria);
      localStorage.setItem('historias', JSON.stringify(this.historias));
    };

    lector.readAsDataURL(archivo);
  }

  abrirModal(historia: any): void {
    this.modalMedia = historia.media;
    // Abrir modal usando Bootstrap JS (accesible globalmente en window)
    const modalElement = document.getElementById('modalHistoria');
    if (modalElement) {
      // Bootstrap Modal está definido en window.bootstrap.Modal si importaste Bootstrap 5 correctamente en angular.json
      // Como no puedes usar 'bootstrap' directamente, accede así:
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}