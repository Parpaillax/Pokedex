import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsApiService } from '../../services/pokemons-api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss'
})
export class PokemonsComponent implements OnInit {
  public allPokemons: any[] = [];
  public pokemonFiltered: any[] = [];
  public generation: number = 0;

  constructor(private route: ActivatedRoute, private pokemonApi: PokemonsApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.generation = +params['id']
      this.pokemonApi.getPokemons().subscribe({
        next: (data) => {
          this.allPokemons = data;
          this.pokemonFiltered = this.pokemonApi.sortPokemonsByGeneration(this.allPokemons, this.generation);
        },
        error: (err) => {
          console.error(err)
        }
      });
    })
  }

}
