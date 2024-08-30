
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { API } from '../../interfaces/api.interface';

@Component({
  selector: 'app-pokeapi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokeapi.component.html',
  styleUrls: ['./pokeapi.component.css'] 
})
export class PokeapiComponent implements OnInit {

  api?: API;

  constructor(private serviceApi: ApiService) {}

  ngOnInit(): void {
    this.serviceApi.getApi().subscribe({
      next: (apiPoke: API | undefined) => {
        if (apiPoke)
        this.api = apiPoke;
        console.log(apiPoke);
      },
      error: (err) => {
        console.error('Error fetching data', err);
      }
    });
  }
}

