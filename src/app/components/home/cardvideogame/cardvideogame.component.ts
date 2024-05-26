import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardvideogame',
  standalone: true,
  imports: [],
  templateUrl: './cardvideogame.component.html',
  styleUrl: './cardvideogame.component.css'
})
export class CardvideogameComponent {
  @Input() regularPrice: number = 15;
  @Input() title: string = '';
  @Input() image: string = './';
  @Input() altImage: string = '';
  @Input() discount: number = 0.05;

}
