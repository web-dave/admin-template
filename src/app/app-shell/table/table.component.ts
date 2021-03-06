import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ITabledata, ITableResponse } from 'src/app/tabledata';

@Component({
  selector: 'admin-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {
  @Input() size: 1 | 2 | 3;
  @Input() title: string;
  @Input() data: Observable<ITableResponse>;
  width: '' | 'w3-third' | 'w3-twothird' = '';
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.size) {
      switch (changes.size.currentValue) {
        case 3:
          this.width = '';
          break;
        case 2:
          this.width = 'w3-twothird';
          break;
        case 1:
          this.width = 'w3-third';
          break;
      }
    }
  }
}
