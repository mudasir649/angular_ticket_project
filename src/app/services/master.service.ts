import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {


  apiUrl: String = 'https://freeapi.miniprojectideas.com/api/TicketsNew/';

  constructor(private http: HttpClient) { }

  login(obj: any){
    return this.http.post(this.apiUrl + 'Login', obj);
  }


}
