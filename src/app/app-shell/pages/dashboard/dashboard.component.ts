import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Observable } from 'rxjs';
import { IPanelData } from 'src/app/panel-data';
import { ITableResponse } from 'src/app/tabledata';
import { IComment } from 'src/app/comment';
import { IProgressData } from 'src/app/progress-data';
import { IUser } from 'src/app/user';
import { IContent } from 'src/app/content';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  paneldata$: Observable<IPanelData[]>;
  tabledata$: Observable<ITableResponse>;
  comments$: Observable<IComment[]>;
  stats$: Observable<IProgressData[]>;
  users$: Observable<IUser[]>;
  content$: Observable<IContent[]>;
  constructor(private service: DashboardService) {}

  ngOnInit() {
    this.comments$ = this.service.getComments();
    this.tabledata$ = this.service.getTableData();
    this.paneldata$ = this.service.getPanelData();
    this.stats$ = this.service.getStats();
    this.users$ = this.service.getUsers();
    this.content$ = this.service.getContent();
  }
}
