import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { MeuPrimeiroComponent } from './app/meu-primeiro/meu-primeiro.component';
import { config } from './app/app.config.server';


const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
