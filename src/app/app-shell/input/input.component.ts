import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'admin-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() icon: string;
  @Input() name: string;
  @Input() label: string;
  @Input() type = 'text';
  constructor() {}

  ngOnInit() {}
}
