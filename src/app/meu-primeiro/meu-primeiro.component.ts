import { Component } from '@angular/core'

@Component({
  selector: 'app-meu-primeiro-component',
  standalone: true,
  imports: [],
  template: `
      <p>Meu primeiro componente com Angular 2!</p>
  `
})
export class MeuPrimeiroComponent {
  title = 'Flavia';
}