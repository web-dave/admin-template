import { Component, OnInit, Input } from '@angular/core';
import { IContent } from 'src/app/content';

@Component({
  selector: 'admin-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.scss']
})
export class ContentTableComponent implements OnInit {
  @Input() content: IContent;
  constructor() {}

  ngOnInit() {}
}
