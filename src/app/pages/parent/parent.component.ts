import { Component } from '@angular/core';
import { PokemonsComponent } from '../pokemons/pokemons.component';
import { GenerationsComponent } from '../generations/generations.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [PokemonsComponent, GenerationsComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

}
