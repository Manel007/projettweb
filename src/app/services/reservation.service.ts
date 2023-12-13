import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/Reservationt';
@Injectable({
  providedIn: 'root'
})
export class ReservationService{
private baseUrl = 'http://localhost:8182/api/condidat'; // Include the API endpoint

constructor(private http: HttpClient) { }

deleteReservation(id: number): Observable<void> {
  return this.http.delete<void>(`${this.baseUrl}/${id}`);
}

getReservation(): Observable<Reservation[]> {
  return this.http.get<Reservation[]>(this.baseUrl+"/getallstock");
}

getReservationById(id: any): Observable<Reservation> {
  return this.http.get<Reservation>(`${this.baseUrl}/${id}`);
}

addReservation(data: Reservation): Observable<Reservation> {
  return this.http.post<Reservation>(this.baseUrl, data);
}

updateReservation(data: Reservation, id: number): Observable<Reservation> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.put<Reservation>(url, data);
}
}