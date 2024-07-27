
import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor,  } from '@angular/common';

import { CursosServices } from './cursos.service';
import { CursosDetalhesComponent } from './cursos-detalhes/cursos-detalhes.component';


@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [
    NgIf, 
    NgFor, 
    CursosDetalhesComponent
  ],
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  nomePortal : string;

  cursos: string[];

  constructor(private CursosServices: CursosServices){
    this.nomePortal = 'http://loiane.training';

    this.cursos = this.CursosServices.getCursos();
  };
  ngOnInit() {
    
  }

}
