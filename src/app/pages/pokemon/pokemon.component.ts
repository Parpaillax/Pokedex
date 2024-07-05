import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../../services/pokemon-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../pokemon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent implements OnInit {
  public pokemon: Pokemon | undefined;
  public pokemonId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private pokemonApi: PokemonApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pokemonApi.getPokemonById(params['id']).subscribe({
        next: (data) => {
          this.pokemon = data
          this.pokemonId = params['id']
        },
        error: (err) => {
          console.error(err);
        }
      })
    })
  }
}
