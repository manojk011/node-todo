import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

export interface CreateVM {
  name: string;
  size: string;
}

@Component({
  selector: 'app-create-vm',
  templateUrl: './create-vm.component.html',
  styleUrls: ['./create-vm.component.scss']
})
export class CreateVmComponent implements OnInit {

  public sizes = [];
  enteredName: string; //what user typed for VM Name
  selectedValue: string;  //what option the user clicks on VM Size drop down menu
  api = 'https://iaasapi-patient-okapi.kpsj001.us-west.mybluemix.net/iaas/t_size/vmware';
  url = 'http://localhost:3002/items'; //mock db
  
  // getData(): Observable<any> {
  //   return this.http.get(this.url).map(res => res.json());
  // }

  getData(): Observable<CreateVM[]>{
    return this.http.get<CreateVM[]>(this.api);
  }

  getSizes() {
    this.getData().subscribe(
      res => {
        for (var i = 0; i < 3; i++) {
          this.sizes.push(res[0]["tsize"][i]["size"]);
        }
        console.log(this.sizes);
      });
  }

  submit(): void {
    this.http.post(this.url, {
      name: this.enteredName,
      size: this.selectedValue
      // size: this.size
    })
      .subscribe(
        result => {
          console.log(result);
        },
        err => {
          console.log('Error occured'); 
        }
      ); 
    console.log("name " + this.enteredName );
    console.log("size " + this.selectedValue );
  }

  // constructor(private tshirtSizeService: TshirtSizeService, private http: HttpClient) { }
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getSizes();

  }

}
