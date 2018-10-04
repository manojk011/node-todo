import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpErrorResponse } from '@angular/common/http'; 
import { Observable, of, BehaviorSubject } from 'rxjs';

export interface Orders {
  by: string;
  name: string;
  date: string;
  status: string;
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
  {name: "Phat", status: '', by: '', date: "" },
  {name: "Anjana", status: '', by: '', date: "", },
  {name: "Pratab", status: '', by: '', date: "", },
  {name: "Vasan", status: '', by: '', date: "", },
  {name: "Hari", status: '', by: '', date: "", },
  {name: "Jithen", status: '', by: '', date: "", },
  {name: "Don", status: '', by: '', date: "", },
  {name: "Kesav", status: '', by: '', date: "", },
  {name: "Tanuja", status: '', by: '', date: ""},
  {name: "Manoj", status: '', by: '', date: "", },

];

@Component({
  selector: 'app-iaas',
  templateUrl: './iaas.component.html',
  styleUrls: ['./iaas.component.scss']
})
export class IaasComponent implements OnInit {

  displayedColumns: string[] = ['VM Name','Status', 'Created By', 'Created Date' ];
  dataSource = MOCK_DATA;

  public statusArray = [];
  public requestorArray = [];
  public startedArray = [];
  public completedArray = [];

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

  getRequestor() {
    this.getData().subscribe(
      res => {
        for ( var i = 0; i < 10; i++) {
          this.statusArray.push(res[i]["detail"]["status"]);
        }
    console.log("Status Array: [" + this.statusArray + "]");
      });
  }

  getStartedArray() {
    this.getData().subscribe(
      res => {
        for ( var i = 0; i < 10; i++) {
          this.startedArray.push(res[i]["detail"]["started_at"]);
        }
    console.log("Started Array: [" + this.startedArray + "]");
      });
  }

  getCompletedArray() {
    this.getData().subscribe(
      res => {
        for ( var i = 0; i < 10; i++) {
          this.requestorArray.push(res[i]["detail"]["requestor"]);
        }
    console.log("Requestor Array: [" + this.requestorArray + "]");
      });
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getStatus();
    this.getRequestor();
    this.getStartedArray();
    this.getCompletedArray();
  }

}
