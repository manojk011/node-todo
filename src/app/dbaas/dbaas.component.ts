import { Component, OnInit } from '@angular/core';

export interface Orders {
  description: string;
  id: string;
  status: string;
}

const MOCK_DATA: Orders[] = [
  {id: "ORCL12C-0011", description: 'New Oracle 12c Single Instance', status: 'In Progress'},
  {id: "ORCL12C-0006", description: 'New Oracle 12c PDB (Multi-Tenant)', status: 'Completed'},
  {id: "ORCL12C-0009", description: 'New Oracle 11g', status: 'In Progress'}
];

@Component({
  selector: 'app-dbaas',
  templateUrl: './dbaas.component.html',
  styleUrls: ['./dbaas.component.scss']
})
export class DbaasComponent implements OnInit {

  displayedColumns: string[] = ['Request ID', 'Description', 'Status'];
  dataSource = MOCK_DATA;

  constructor() { }

  ngOnInit() {
  }

}
