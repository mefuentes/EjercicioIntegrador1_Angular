import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {
  @Input() usuarios: any[] = [];
  @Output() usuarioSeleccionado = new EventEmitter<number>();

  seleccionarUsuario(id: number): void {
    this.usuarioSeleccionado.emit(id);
  }
}
