import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl='http://localhost:8989/api/commande';

@Injectable({
  providedIn: 'root'
})
export class ServicecommandeService {

  constructor(private http:HttpClient) {
  }
  
  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`,{responseType:'text'});
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl + `/delete`,{responseType:'text'});
  }

  findByTitle(nom): Observable<any> {
    return this.http.get(`${baseUrl}?nom=${nom}`);
  }


  
}


