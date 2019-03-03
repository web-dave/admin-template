import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/comment';
import { DashboardService } from '../pages/dashboard/dashboard.service';

@Component({
  selector: 'admin-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() data: Observable<IComment[]>;
  constructor() {}

  ngOnInit() {}
}
