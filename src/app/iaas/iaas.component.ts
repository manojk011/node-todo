import { Component, OnInit } from '@angular/core';

export interface Orders {
  by: string;
  name: string;
  date: string;
  status: string;
}

const MOCK_DATA: Orders[] = [
  {name: "Fatdog", status: 'In Progress', by: 'Oracle', date: "300 BC"},
  {name: "Fedora", status: 'Completed', by: 'Oracle', date: "1985", },
  {name: "Ubuntu", status: 'In Progress', by: 'VM Ware', date: "today" }
];

@Component({
  selector: 'app-iaas',
  templateUrl: './iaas.component.html',
  styleUrls: ['./iaas.component.scss']
})
export class IaasComponent implements OnInit {

  displayedColumns: string[] = ['VM Name','Status', 'Created By', 'Created Date' ];
  dataSource = MOCK_DATA;

  constructor() { }

  ngOnInit() {
  }

}
