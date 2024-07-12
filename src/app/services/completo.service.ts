import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Completo } from '../interfaces/completo';

@Injectable({
  providedIn: 'root'
})
export class CompletoService {
  private apiUrl = 'http://localhost:3000/completos';

  constructor(private http: HttpClient) { }

  getCompletos(): Observable<Completo[]> {
    return this.http.get<Completo[]>(this.apiUrl);
  }

  addCompleto(completo: Completo): Observable<Completo> {
    return this.http.post<Completo>(this.apiUrl, completo);
  }

  updateCompleto(completo: Completo): Observable<Completo> {
    return this.http.put<Completo>(`${this.apiUrl}/${completo.id}`, completo);
  }

  deleteCompleto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
