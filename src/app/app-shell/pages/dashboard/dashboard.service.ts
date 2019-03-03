import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPanelData } from 'src/app/panel-data';
import { ITableResponse } from 'src/app/tabledata';
import { IComment } from 'src/app/comment';
import { IUser } from 'src/app/user';
import { IProgressData } from 'src/app/progress-data';
import { IContent } from 'src/app/content';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  url = 'http://localhost:3000/';

  // Resources
  // http://localhost:3000/paneldata
  // http://localhost:3000/tabledata
  // http://localhost:3000/comments
  // http://localhost:3000/users

  constructor(private http: HttpClient) {}
  getPanelData() {
    return this.http.get<IPanelData[]>(this.url + 'paneldata');
  }
  getTableData() {
    return this.http.get<ITableResponse>(this.url + 'tabledata');
  }
  getComments() {
    return this.http.get<IComment[]>(this.url + 'comments');
  }
  getUsers() {
    return this.http.get<IUser[]>(this.url + 'users');
  }
  getStats() {
    return this.http.get<IProgressData[]>(this.url + 'stats');
  }
  getContent() {
    return this.http.get<IContent[]>(this.url + 'content');
  }
}
