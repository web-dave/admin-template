import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'admin-pannel',
  templateUrl: './pannel.component.html',
  styleUrls: ['./pannel.component.scss']
})
export class PannelComponent {
  @Input() data;
  constructor() {}
}
