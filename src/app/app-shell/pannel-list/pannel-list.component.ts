import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'admin-pannel-list',
  templateUrl: './pannel-list.component.html',
  styleUrls: ['./pannel-list.component.scss']
})
export class PannelListComponent implements OnInit {
  @Input() data;
  constructor() {}

  ngOnInit() {}
}
