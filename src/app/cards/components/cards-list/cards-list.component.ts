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
    this.loadCards();
  }

  loadCards(){
    this.loading = true;
    this.cardsService.getPage(this.page, this.pageSize).subscribe(
      (response:any) => {
        this.cards = this.cards.concat(response.cards);
        this.loading = false;
        this.page++;
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
    const windowBottom = windowHeight + window.scrollY;

    if (windowBottom >= docHeight - 1) {
      this.loadCards();
    }
  }

}
