import { Component, HostListener } from '@angular/core';
import { Cards } from '../../model/Cards.model';
import { CardsService } from '../../service/cards/cards.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent {
  cards: Cards[] = [] //Variable with name module and initial value
  loading = false;
  page = 1;
  pageSize = 40;

  constructor(private cardsService:CardsService) { }

  ngOnInit(): void {
    this.cardsService.getNumberOfCards(40, 1).subscribe(
      (response:any) => this.cards = response.cards)
  }

  loadCards() {
    this.loading = true;
    this.cardsService.getAll(this.page, this.pageSize).subscribe(
      newCards => {
        this.cards = this.cards.concat(newCards);
        this.page++;
        this.loading = false;
      },
      error => {
        this.loading = false;
        console.error('Error fetching cards:', error);
      }
    );
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body, html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight - 1) {
      this.loadCards();
    }
  }

}
