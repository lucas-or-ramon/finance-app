import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';

import {Monthly, Registry, Revenue} from '../model/monthly';

@Injectable({
  providedIn: 'root'
})
export class MonthlyService {

  private readonly API_BASE = 'https://finance-api.fly.dev/api/v1'

  constructor(private httpClient: HttpClient) {}

  getMonthlyResume(year: number, month: number): Observable<Monthly> {
    return this.httpClient.get<Monthly>(`${this.API_BASE}/resume/monthly/${year}/${month}`)
  }

  loadById(id: number, type: string) {
    return this.httpClient.get<Registry>(`${this.API_BASE}/${type}/${id}`);
  }

  save(registry: Partial<Registry>, type: String): Observable<Registry> {
    if (registry.id == 0) {
      return this.create(registry, type);
    }
    return this.update(registry, type);
  }

  private create(registry: Partial<Registry>, type: String): Observable<Registry> {
    return this.httpClient.post<Registry>(`${this.API_BASE}/${type}`, registry).pipe(first());
  }

  private update(registry: Partial<Registry>, type: String): Observable<Registry> {
    return this.httpClient.put<Registry>(`${this.API_BASE}/${type}/${registry.id}`, registry).pipe(first());
  }

  getMonthlyRevenues(year: number, month: number) {
    return this.httpClient.get<Registry[]>(`${this.API_BASE}/revenue/${year}/${month}`)
  }

  getMonthlyExpenditures(year: number, month: number) {
    return this.httpClient.get<Registry[]>(`${this.API_BASE}/expenditure/${year}/${month}`)
  }
}
