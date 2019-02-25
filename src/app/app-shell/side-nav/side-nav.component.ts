import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'admin-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnChanges {
  sidebarState: 'block' | 'none' = 'none';
  @Input() toggleSideBar: 'block' | 'none' = 'none';
  constructor() {}

  sidebarToggle() {
    this.sidebarState = this.sidebarState === 'block' ? 'none' : 'block';
  }

  closeSidebar() {
    this.sidebarState = 'none';
  }

  ngOnChanges(obj) {
    this.sidebarToggle();
  }
}
