import { Component, Input } from '@angular/core';
import { Cards } from '../../model/Cards.model';

@Component({
  selector: 'app-cards-detail',
  templateUrl: './cards-detail.component.html',
  styleUrls: ['./cards-detail.component.scss']
})

export class CardsDetailComponent {
  @Input() card!:Cards

  flipCard(card: any) {
    card.flipped = !card.flipped;
  }
}

