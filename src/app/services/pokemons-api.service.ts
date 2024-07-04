import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsApiService {

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.http.get(environment.apiURL)
  }

}
