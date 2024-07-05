import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor(private http: HttpClient) { }

  getPokemonById(id: number): Observable<any> {
    return this.http.get<Pokemon>(`https://tyradex.tech/api/v1/pokemon/${id}`);
  }
}
