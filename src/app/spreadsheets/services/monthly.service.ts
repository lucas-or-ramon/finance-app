import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {FinanceDate, Monthly, Registry} from '../model/monthly';

@Injectable({
  providedIn: 'root'
})
export class MonthlyService {

  private readonly API_BASE = 'https://finance-api.fly.dev/api/v1'

  constructor(private httpClient: HttpClient) {
  }

  getMonthlyResume(date: FinanceDate): Observable<Monthly> {
    console.log("POST: " + `${this.API_BASE}/resume/monthly` + " - BODY: " + JSON.stringify(date))
    return this.httpClient.post<Monthly>(`${this.API_BASE}/resume/monthly`, date);
  }

  loadById(id: number, type: string) {
    console.log("GET: " + `${this.API_BASE}/${type}/${id}`)
    return this.httpClient.get<Registry>(`${this.API_BASE}/${type}/${id}`);
  }

  save(registry: Registry, type: string): Observable<HttpResponse<Registry>> {
    console.log("POST: " + `${this.API_BASE}/${type}` + " - BODY: " + JSON.stringify(registry))
    return this.httpClient.post<HttpResponse<Registry>>(`${this.API_BASE}/${type}`, registry);
  }

  update(registry: Registry, type: string): Observable<HttpResponse<Registry>> {
    console.log("PUT: " + `${this.API_BASE}/${type}/${registry.id}` + " - BODY: " + JSON.stringify(registry))
    return this.httpClient.put<HttpResponse<Registry>>(`${this.API_BASE}/${type}/${registry.id}`, registry);
  }

  delete(id: string, type: string): Observable<HttpResponse<Registry>> {
    console.log("DELETE: " + `${this.API_BASE}/${type}/${id}`)
    return this.httpClient.delete<HttpResponse<any>>(`${this.API_BASE}/${type}/${id}`);
  }
}
