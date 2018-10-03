import { Component, OnInit } from '@angular/core';

export interface NewOrg {
  id: string;
  name: string;
}

@Component({
  selector: 'app-new-org',
  templateUrl: './new-org.component.html',
  styleUrls: ['./new-org.component.scss']
})
export class NewOrgComponent implements OnInit {
  
  enterdID: string;
  enteredName: string;
  
  constructor() { }

 save(){
   
 }
  ngOnInit() {
  }

}
