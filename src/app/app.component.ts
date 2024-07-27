
import { RouterOutlet } from '@angular/router';

import { Component } from '@angular/core';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { CursosDetalhesComponent } from './cursos/cursos-detalhes/cursos-detalhes.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosServices } from './cursos/cursos.service';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MeuPrimeiroComponent, 
    CursosComponent, 
    CursosDetalhesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [CursosServices],
})
export class AppComponent {
  title = 'MyFirtsAngular';
}
