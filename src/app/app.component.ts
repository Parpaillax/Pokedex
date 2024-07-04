import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './partials/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { GenerationsComponent } from './pages/generations/generations.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, ContactComponent, RouterModule, ErrorComponent, GenerationsComponent, PokemonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'My App';
}
