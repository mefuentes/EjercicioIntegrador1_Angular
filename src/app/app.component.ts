import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ListaUsuariosComponent, DetalleUsuarioComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usuarios: any[] = [];
  usuarioSeleccionado: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.obtenerUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  mostrarDetalles(id: number): void {
    this.usuarioSeleccionado = this.usuarios.find(u => u.id === id);
  }
}
