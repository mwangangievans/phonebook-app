import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


export interface phonebook_interface{
  name:string;
  phone:string;
}

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  constructor(private http: HttpClient) { }

  getAllPhones():Observable<phonebook_interface[]>{
    return this.http.get<phonebook_interface[]>('http://127.0.0.1:8000/api/phones'
      ).pipe(map((res)=>{
        return res
      }))
  }
}
