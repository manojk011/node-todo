import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { $ } from 'protractor';

export interface Inbox {
  nuid: string;
  name: string;
  user_org: string;
  group: string;
  newUser: boolean;
}

export interface DialogData {
  org: string;
  group: string;
}

const MOCK_DATA: Inbox[] = [
  {nuid: "Y67890", name: 'Sonali', user_org: 'CTO', group: 'STS', newUser: false},
  {nuid: "X12345", name: 'Anjana', user_org: '', group: '', newUser: true},
];

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  public noOrgSelected: boolean = true;
  public noGroupSelected: boolean = true;
  public selectedOrg: any;
  public selectedGroup: any;
  public index: number = 0;
  displayedColumns: string[] = ['NUID', 'Name', 'Org', 'Group'];
  dataSource = MOCK_DATA;

  openAddOrgDialog() {
    const addOrgDialogRef = this.dialog.open(AddOrgDialog);

    addOrgDialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.selectedOrg = `${result}`;
      this.noOrgSelected = false;
      MOCK_DATA[this.index].user_org = this.selectedOrg;
    });
  }

  openAddGroupDialog() {
    const addGroupDialogRef = this.dialog.open(AddGroupDialog);

    addGroupDialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.selectedGroup = `${result}`;
      this.noGroupSelected = false;
      
    });
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

}

@Component({
  selector: 'add-group-dialog',
  templateUrl: 'add-group-dialog.html',
})
export class AddGroupDialog {

  emojis = ['🐼', '💪', '🐷', '🤖', '👽', '🐥'];
  choosenEmoji: string;

  constructor(
    public addGroupDialogRef: MatDialogRef<AddGroupDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    selectedOption() {
      console.log("selected " + this.choosenEmoji);
    }

    onNoClick(): void {
      this.addGroupDialogRef.close();
    }

    confirmSelection() {
      this.addGroupDialogRef.close(this.choosenEmoji);
    }
}

@Component({
  selector: 'add-org-dialog',
  templateUrl: 'add-org-dialog.html',
})
export class AddOrgDialog {

  emojis = ['🐥', '👽', '🐼', '💪', '🐷', '🤖'];
  choosenEmoji: string;

  constructor(
    public addOrgDialogRef: MatDialogRef<AddOrgDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}


    selectedOption() {
      console.log("selected " + this.choosenEmoji);
    }
    
    onNoClick(): void {
      this.addOrgDialogRef.close();
    }

    confirmSelection() {
      this.addOrgDialogRef.close(this.choosenEmoji);
    }
}