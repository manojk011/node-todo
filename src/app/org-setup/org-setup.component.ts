import { Component, OnInit } from '@angular/core';

export interface Inbox {
  orgID: string;
  orgName: string;
}

const MOCK_DATA: Inbox[] = [
  {orgID: "12345", orgName: 'IMG'},
  {orgID: "67890", orgName: 'TRO'},
  {orgID: "11235", orgName: 'CTO'}
];

@Component({
  selector: 'app-org-setup',
  templateUrl: './org-setup.component.html',
  styleUrls: ['./org-setup.component.scss']
})
export class OrgSetupComponent implements OnInit {

  displayedColumns: string[] = ['Org ID', 'Org Name'];
  dataSource = MOCK_DATA;

  constructor() { }

  ngOnInit() {
  }

}
