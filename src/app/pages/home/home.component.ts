import { Component } from '@angular/core';
import { PokeapiComponent } from '../../components/pokeapi/pokeapi.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PokeapiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
