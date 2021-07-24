import { Injectable } from '@angular/core';
import { HttpClient as Http } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuickviewService {

  constructor(private http: Http) { }

  // Get from the API
  
  getUsers() {
    // return this.http.get('assets/data/users.json')
    //   .map(res => res.json());
  }

  getChatMessages() {
    // return this.http.get('assets/data/messages.json')
    //   .map(res => res.json());
  }
}
