import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { GenerationsComponent } from './pages/generations/generations.component';
import { ParentComponent } from './pages/parent/parent.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'generations', component: GenerationsComponent },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
  { path: `generations/:id`, component: ParentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];