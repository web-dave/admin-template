import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/user';

@Component({
  selector: 'admin-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent {
  @Input() user: IUser;
  constructor() {}
}
