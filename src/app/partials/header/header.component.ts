import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public titles: Array<any> = [
    { url: '/home', name: 'Accueil' },
    { url: '/pokemons', name: 'Tous les pokémons' },
    { url: '/generations/1', name: 'Pokémons par génération' },
    { url: '/contact', name: 'Me contacter' },
  ]
  public clickCount: number = 0

  plus() {
    this.clickCount++
  }
}
