import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class MadamedeliaService {
  apiUrl: string = environment.apiUrl;

  constructor(private _http: Http) { }

  getAnnouncements(){
    let url: string = this.apiUrl + 'announcements';
    return this._http.get(url)
      .map(res => res.json());
  }

  saveAnnouncement(id, body){
    let url: string = this.apiUrl + "announcements/" + id
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    var announcement = {
      id: parseInt(id),
      body: body
    };

    this._http.put(url, JSON.stringify(announcement), options)
      .subscribe();
  }
}
