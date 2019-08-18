import { Injectable } from '@angular/core';
import { Hotel } from '../hotel';
import { dataHotel } from '../dataHotel';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor() { }
 /*Funcion del buscar que utiliza nuestro archivo JSON*/ 
 getHotel(): Observable<Hotel[]> {
  return of (dataHotel);
}

}
