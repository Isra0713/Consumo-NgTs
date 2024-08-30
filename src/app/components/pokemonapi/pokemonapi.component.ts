import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../interfaces/api.interfacePoke';
import { ApiPokemon } from '../../services/api.pokemon';


@Component({
  selector: 'app-pokemonapi',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './pokemonapi.component.html',
  styleUrl: './pokemonapi.component.css'
})
export class PokemonapiComponent implements OnInit {

  pokeapi?: Pokemon;

  constructor (private serviceApiPoke: ApiPokemon) {}

  getImageUrl(url: string): string {
    const id = url.split('/').filter(Boolean).pop(); // Extrae el ID de la URL
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`; // URL de la imagen en PokeAPI
  }

  ngOnInit(): void {
    this.serviceApiPoke.getApi().subscribe({
      next: (apiPokemon: Pokemon | undefined) => {
        if (apiPokemon)
        this.pokeapi = apiPokemon;
        console.log(apiPokemon);
      },
      error: (err) => {
        console.error('Error fetching data', err);
      }
    });
  }


}
