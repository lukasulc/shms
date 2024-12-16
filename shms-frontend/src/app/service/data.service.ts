import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { BASE_URL } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string;
  httpClient = inject(HttpClient);

  constructor(@Inject(BASE_URL) url: string) {
    this.baseUrl = url;
  }

  public getAll<T>(subPath: string) {
    return this.httpClient.get<T[]>(`${this.baseUrl}/${subPath}/all`);
  }

  public getById<T>(subPath: string, id: number) {
    return this.httpClient.get<T>(`${this.baseUrl}/${subPath}/${id}`);
  }

  public add<T>(subPath: string, data: T) {
    return this.httpClient.post<T>(`${this.baseUrl}/${subPath}/add`, data);
  }

  public update<T>(subPath: string, data: T) {
    return this.httpClient.put<T>(`${this.baseUrl}/${subPath}/update`, data);
  }

  public patch<T>(subPath: string, data: T) {
    return this.httpClient.patch<T>(`${this.baseUrl}/${subPath}/patch`, data);
  }

  public delete<T>(subPath: string, id: number) {
    return this.httpClient.delete<T>(`${this.baseUrl}/${subPath}/delete/${id}`);
  }
}
