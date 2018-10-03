import { Component, OnInit } from '@angular/core';

export interface Orders {
  description: string;
  id: string;
  type: string;
  status: string;
}

const MOCK_DATA: Orders[] = [
  {id: "ORCL12C-0011", description: 'New Oracle 12c Single Instance', type: "DbaaS", status: 'In Progress'},
  {id: "ORCL12C-0006", description: 'New Oracle 12c PDB (Multi-Tenant)', type: "DbaaS", status: 'Completed'},
  {id: "ORCL12C-0009", description: 'New Oracle 11g', type: "DbaaS", status: 'In Progress'}
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['Request ID', 'Description', 'Service Type', 'Status'];
  dataSource = MOCK_DATA;

  constructor() { }

  ngOnInit() {
  }

}
