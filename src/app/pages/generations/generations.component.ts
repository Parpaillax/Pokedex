import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokemonsComponent } from '../pokemons/pokemons.component';

@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [RouterModule, PokemonsComponent],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.scss'
})
export class GenerationsComponent {
  public generations: Array<any> = [
    { id: "/generations/1", gen: "Generation 1" },
    { id: "/generations/2", gen: "Generation 2" },
    { id: "/generations/3", gen: "Generation 3" },
    { id: "/generations/4", gen: "Generation 4" },
    { id: "/generations/5", gen: "Generation 5" },
  ]
}
