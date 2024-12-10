import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  baseUrl = 'http://localhost:8080';
  httpClient = inject(HttpClient);
  constructor() {}

  public getAll<T>(deviceType: string) {
    return this.httpClient.get<T[]>(`${this.baseUrl}/${deviceType}/all`);
  }

  public getById<T>(deviceType: string, id: number) {
    return this.httpClient.get<T>(`${this.baseUrl}/${deviceType}/${id}`);
  }

  public add<T>(deviceType: string, data: T) {
    return this.httpClient.post<T>(`${this.baseUrl}/${deviceType}/add`, data);
  }

  public update<T>(deviceType: string, data: T) {
    return this.httpClient.put<T>(`${this.baseUrl}/${deviceType}/update`, data);
  }

  public delete<T>(deviceType: string, id: number) {
    return this.httpClient.delete<T>(
      `${this.baseUrl}/${deviceType}/delete/${id}`
    );
  }
}
