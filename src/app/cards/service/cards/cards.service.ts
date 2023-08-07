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

  getAll():Observable<Cards[]>{

    const params = "?"
    const contains = ['contains=imageUrl'];

    return this.http.get<Cards[]>(`${environment.API_URL}${params}${contains}`);
  }

  getPage(pageNumber : number, cardsNumber : number):Observable<Cards[]>{

    const page = pageNumber;
    const pageSize = cardsNumber;
    const params = "?"
    const contains = ['contains=imageUrl'];

    return this.http.get<Cards[]>(`${environment.API_URL}${params}${contains}&page=${page}&pageSize=${pageSize}`);
  }
}
