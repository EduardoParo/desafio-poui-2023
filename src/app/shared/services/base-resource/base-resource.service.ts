import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseResourceService {
  protected http: HttpClient;

  constructor(protected apiPath: string, protected injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  getAll(): Observable<any> {
    return this.http.get(this.apiPath);
  }

  create(resource: any): Promise<any> {
    return firstValueFrom(this.http.post(this.apiPath, resource));
  }
}
