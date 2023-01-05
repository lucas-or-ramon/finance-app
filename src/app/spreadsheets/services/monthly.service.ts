import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';

import { Monthly, Registry } from '../model/monthly';

@Injectable({
  providedIn: 'root'
})
export class MonthlyService {

  private readonly API_BASE = window.location.protocol + '//' + window.location.host + '/api/v1'

  constructor(private httpClient: HttpClient) {}

  getMonthlyResume(): Observable<Monthly> {
    return this.httpClient.get<Monthly>(`${this.API_BASE}/resume/monthly/2022/10`)
  }

  loadById(id: number, type: string) {
    return this.httpClient.get<Registry>(`${this.API_BASE}/${type}/${id}`);
  }

  save(registry: Partial<Registry>, type: String): Observable<Registry> {
    console.log(registry)
    if (registry.id == 0) {
      console.log("create")
      return this.create(registry, type);
    }
    console.log("update")
    return this.update(registry, type);
  }

  private create(registry: Partial<Registry>, type: String): Observable<Registry> {
    return this.httpClient.post<Registry>(`${this.API_BASE}/${type}`, registry).pipe(first());
  }

  private update(registry: Partial<Registry>, type: String): Observable<Registry> {
    return this.httpClient.put<Registry>(`${this.API_BASE}/${type}/${registry.id}?order=ONE`, registry).pipe(first());
  }
}
