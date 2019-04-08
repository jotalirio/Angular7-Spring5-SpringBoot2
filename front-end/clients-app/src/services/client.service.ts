import { Injectable } from '@angular/core';
import { CLIENTS } from 'src/mocked-data/clients.json'
import { Client } from 'src/models/client';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../environments/environment';
import { map } from 'rxjs/operators';


@Injectable()
export class ClientService {

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  private clients: Client[];
  private apiBaseUrl: string;

  constructor(private _httpClient: HttpClient) { 
    this.apiBaseUrl = environment.apiBaseUrl;
  }

  public getClients(): Observable<Client[]> { // Observable object, Client[]
    const endPoint = `${this.apiBaseUrl}/api/clients`;
    return this._httpClient.get<Client[]>(endPoint).pipe( // .get(endPoint) retuns a Observable<any>
      map( response => response as Client[]) // We cast the Observable<any> inside the response to a Client[]
    );
    // return this._httpClient.get<Client[]>(endPoint); // We cast the Observable<any> inside the response to a Client[]
    // return of(CLIENTS); // We convert using the operator 'of' the Client[] into an Observable<Client[]>
  }


  public getClient(id: number): Observable<Client> {
    const endPoint = `${this.apiBaseUrl}/api/clients/${id}`;
    return this._httpClient.get<Client>(endPoint);
  }


  public create(client: Client): Observable<Client> {
    const endPoint = `${this.apiBaseUrl}/api/clients`;
    return this._httpClient.post<Client>(endPoint, client, { headers: this.httpHeaders });
  }


  public update(client: Client): Observable<Client> {
    const endPoint = `${this.apiBaseUrl}/api/clients/${client.id}`;
    return this._httpClient.put<Client>(endPoint, client, { headers: this.httpHeaders });
  }


  public delete(id: number): Observable<null> {
    const endPoint = `${this.apiBaseUrl}/api/clients/${id}`;
    return this._httpClient.delete<null>(endPoint, { headers: this.httpHeaders });
  }
}
