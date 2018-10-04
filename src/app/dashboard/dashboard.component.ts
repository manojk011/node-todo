import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpErrorResponse } from '@angular/common/http'; 
import { Observable, of, BehaviorSubject } from 'rxjs';

export interface Orders {
  status: string;
  description: string;
  id: string;
  type: string;
}

export interface Detail {
  status: string;
  userid: string;
  password: string;
  ipaddress: string;
  requestor: string;
  request_id: string;
  started_at: string;
  completed_at: string;
  service_type: string;
}

const MOCK_DATA: Orders[] = [
  {id: "ORCL12C-0001", description: 'New Oracle 12c Single Instance', type: "", status: 'In Progress'},
  {id: "ORCL12C-0002", description: 'New Oracle 12c PDB (Multi-Tenant)', type: "", status: 'Completed'},
  {id: "ORCL12C-0003", description: 'New Oracle 11g', type: "", status: 'In Progress'},
  {id: "ORCL12C-0004", description: 'New Oracle 11g', type: "", status: 'In Progress'},
  {id: "ORCL12C-0005", description: 'New Oracle 11g', type: "", status: 'In Progress'},
  {id: "ORCL12C-0006", description: 'New Oracle 11g', type: "", status: 'In Progress'},
  {id: "ORCL12C-0007", description: 'New Oracle 11g', type: "", status: 'In Progress'},
  {id: "ORCL12C-0008", description: 'New Oracle 11g', type: "", status: 'In Progress'},
  {id: "ORCL12C-0009", description: 'New Oracle 11g', type: "", status: 'In Progress'},
  {id: "ORCL12C-0010", description: 'New Oracle 11g', type: "", status: 'In Progress'},
];

// const MOCK_DATA: Detail[] = [
//   { status: this.statusArray[0], userid: "string", password: "string", ipaddress: "string", requestor: "string", request_id: "string", started_at: "string", completed_at: "",
//     service_type: this.serviceTypeArray[0] }

// ];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['Request ID', 'Description', 'Service Type', 'Status'];
  dataSource = MOCK_DATA;
  public statusArray = [];
  public messageArray = [];
  public serviceTypeArray = [];


  api = "https://iaasapi-patient-okapi.kpsj001.us-west.mybluemix.net/iaas/v1/status/all";

  getData(): Observable<Detail[]>{
    return this.http.get<Detail[]>(this.api);
  }

  getStatus() {
    this.getData().subscribe(
      res => {
        for ( var i = 0; i < 10; i++) {
          this.statusArray.push(res[i]["detail"]["status"]);
        }
    console.log("Status Array: [" + this.statusArray + "]");
      });
  }

  getMessageArray() {
    this.getData().subscribe(
      res => {
        for ( var i = 0; i < 10; i++) {
          this.messageArray.push(res[i]["detail"]["message"]);
        }
    console.log("Message Array: [" + this.messageArray + "]");
      });
  }

  

  getServiceTypeArray() {
    this.getData().subscribe(
      res => {
        for ( var i = 0; i < 10; i++) {
          this.serviceTypeArray.push(res[i]["detail"]["service_type"]);
        }
    console.log("Service Type Array: [" + this.serviceTypeArray + "]");
      });
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getStatus();
    this.getMessageArray();
    this.getServiceTypeArray();
  }


}
