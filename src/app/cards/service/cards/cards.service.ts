import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cards } from '../../model/Cards.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) {}

  getAll(pageNumber : number, cardsNumber : number):Observable<Cards[]>{

    const page = pageNumber;
    const pageSize = cardsNumber;
    const contains = 'imageUrl';

    return this.http.get<Cards[]>(`${environment.API_URL}${contains}`);
  }

  getNumberOfCards(numberOfCards : number, pageNumber : number):Observable<Cards[]>{

    const page = pageNumber;
    const pageSize = numberOfCards;
    const contains = 'imageUrl';

    const options = `?page=${page}&pageSize=${pageSize}&contains=${contains}`


    return this.http.get<Cards[]>(`${environment.API_URL}${options}`);
  }
}
