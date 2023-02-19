import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Monthly, Registry} from '../model/monthly';

@Injectable({
  providedIn: 'root'
})
export class MonthlyService {

  private readonly API_BASE = 'https://finance-api.fly.dev/api/v1'

  constructor(private httpClient: HttpClient) {
  }

  getMonthlyResume(year: number, month: number): Observable<Monthly> {
    return this.httpClient.get<Monthly>(`${this.API_BASE}/resume/monthly/${year}/${month}`)
  }

  loadById(id: number, type: string) {
    return this.httpClient.get<Registry>(`${this.API_BASE}/${type}/${id}`);
  }

  save(registry: Registry, type: string): Observable<HttpResponse<Registry>> {
    return this.httpClient.post<HttpResponse<Registry>>(`${this.API_BASE}/${type}`, registry);
  }

  update(registry: Registry, type: string): Observable<HttpResponse<Registry>> {
    return this.httpClient.put<HttpResponse<Registry>>(`${this.API_BASE}/${type}/${registry.id}`, registry);
  }

  delete(id: string, type: string): Observable<HttpResponse<Registry>> {
    return this.httpClient.delete<HttpResponse<any>>(`${this.API_BASE}/${type}/${id}`);
  }

  getMonthlyRevenues(year: number, month: number) {
    return this.httpClient.get<Registry[]>(`${this.API_BASE}/revenue/${year}/${month}`)
  }

  getMonthlyExpenditures(year: number, month: number) {
    return this.httpClient.get<Registry[]>(`${this.API_BASE}/expenditure/${year}/${month}`)
  }
}
