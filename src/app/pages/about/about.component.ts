import { Component } from '@angular/core';
import { PokemonapiComponent } from '../../components/pokemonapi/pokemonapi.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PokemonapiComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {

}
