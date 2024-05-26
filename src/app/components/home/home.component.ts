import { Component } from '@angular/core';
import { CardvideogameComponent } from './cardvideogame/cardvideogame.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardvideogameComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  videogames = [
    {
      id: '1',
      title: "Red Dead redemption 2",
      price: 19,
      discount: 0.05,
      image: 'https://'
    },
    {
      id: '3',
      title: "Doom Eternal",
      price: 10.5,
      discount: 0.10,
      image: 'https://'
    },
    {
      id: '5',
      title: "The Witcher III",
      price: 9,
      discount: 0.2,
      image: 'https://'
    },
    {
      id: '14',
      title: "Fornite",
      price: 3,
      discount: 0.11,
      image: 'https://'
    },
    {
      id: '567',
      title: "Minecraft",
      price: 7,
      discount: 0.14,
      image: 'https://'
    },
    {
      id: '65',
      title: "Counter Strike 2",
      price: 22,
      discount: 0.16,
      image: 'https://'
    }

  ]

}
