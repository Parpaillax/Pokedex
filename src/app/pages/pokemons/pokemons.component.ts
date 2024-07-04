import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsApiService } from '../../services/pokemons-api.service';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss'
})
export class PokemonsComponent implements OnInit {
  public allPokemons: any[] = [];
  public pokemonFiltered: any[] = [];
  public generation: number | null = null;

  constructor(private route: ActivatedRoute, private pokemonApi: PokemonsApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.generation = +params['id']
      this.getPokemons();
    })
  }

  getPokemons(): any {
    this.pokemonApi.getPokemons().subscribe({
      next: (data) => {
        this.allPokemons = data;
        this.sortPokemonsByGeneration();
      },
      error: (err) => {
        console.error(err)
      }
    });
  }

  sortPokemonsByGeneration(): void {
    this.pokemonFiltered = this.allPokemons.filter(pokemon => pokemon.generation === this.generation);
  }

}
