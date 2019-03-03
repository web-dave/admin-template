import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'admin-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}
