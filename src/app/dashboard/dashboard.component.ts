import { Component, OnInit } from '@angular/core';
import { DashboardCard } from '../dashboard-card/dashboard-card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  dashboardCards: DashboardCard[] = [
    {
      id: 1,
      title: 'Customer Trend',
      type: 'chart'
    },
    {
      id: 1,
      title: 'Money Pending',
      type: 'number',
      value: 6000
    }
  ];

  ngOnInit() {
  }

}
