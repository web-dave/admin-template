import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  paneldata = [
    {
      name: 'users',
      icon: 'fa-users',
      color: 'orange',
      data: 50
    },
    {
      name: 'Shares',
      icon: 'fa-share-alt',
      color: 'teal',
      data: 23
    },
    {
      name: 'Views',
      icon: 'fa-eye',
      color: 'blue',
      data: 99
    },
    {
      name: 'Messages',
      icon: 'fa-comment',
      color: 'red',
      data: 52
    },
    {
      name: 'users',
      icon: 'fa-users',
      color: 'orange',
      data: 50
    },
    {
      name: 'Shares',
      icon: 'fa-share-alt',
      color: 'teal',
      data: 23
    }
  ];

  tabledata = {
    settings: {
      order: [
        {
          column: 'icon',
          type: 'icon'
        },
        {
          column: 'label',
          type: 'text'
        },
        {
          column: 'data',
          type: 'italic'
        }
      ],
      title: 'Moin Table'
    },
    data: [
      {
        icon: 'fa-user',
        label: 'New record, over 90 views.',
        data: '10 mins'
      },
      {
        icon: 'fa-bell',
        label: 'Database error.',
        data: '15 mins'
      },
      {
        icon: 'fa-user',
        label: 'New record, over 40 users.',
        data: '17 mins'
      },
      {
        icon: 'fa-comment',
        label: 'Check transactions.',
        data: '28 mins'
      },
      {
        icon: 'fa-laptop',
        label: 'CPU overload.',
        data: '35 mins'
      },
      {
        icon: 'fa-share-alt',
        label: 'New shares.',
        data: '39 mins'
      }
    ]
  };

  constructor() {}

  ngOnInit() {}
}
