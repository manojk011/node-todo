import { Component, Input, OnInit, Inject } from '@angular/core'; 
import { Headers, RequestOptions } from "@angular/http"; 
// import {MatTableDataSource} from '@angular/material';
// import {DataSource} from '@angular/cdk/collections';
import { HttpClient, HttpHeaders, HttpRequest, HttpErrorResponse } from '@angular/common/http'; 
import { Observable, of, BehaviorSubject } from 'rxjs';
// import { BehaviorSubject } from 'rxjs';
// import { Item } from './item'; 
import { ItemService } from './item.service'; 
import { Router } from '@angular/router';

export class DataResponse { 
    // id: number; 
    entity: string; 
    tshirtSize: string; 
    cpu: string; 
    memory: string; 
    disk: string;  
} 

export class Item {
    entity: string;
    tshirtSize: string;
    cpu: string;
    memory: string;
    disk: string;
  }
  

const MOCK_DATA: DataResponse[] = [
    {entity: "001 - Server", tshirtSize: "small", cpu: "", memory:"memory", disk:"none"},
    // {entity: "002 - Database", tshirtSize: "medium", cpu: "", memory:"memory", disk:"disk"},
  ];

@Component ({ 
    selector: 'item', 
    templateUrl: './item.component.html', 
    styleUrls: ['./item.component.scss'],
    // providers: [Observable]
}) 

export class ItemComponent  implements OnInit { 
    // public sizes = ["Select Size"];
    public sizes = [];
    public cpuArray = [];
    public memoryArray = [];
    public storageArray = [];
    entity: string;
    tshirtSize: string;
    cpu: string;
    memory: string;
    disk: string;
    //@Input() name: string;
    items: Item[];
    newItems: Item[];
    public newItem: Item; 
    counter: 1; 
    isDB: boolean; 
    api = 'https://iaasapi-patient-okapi.kpsj001.us-west.mybluemix.net/iaas/t_size/vmware';
    url = 'http://localhost:3000/items'; //mock db

    displayedColumns: string[] = ['Entity', 'T-Shirt Size', 'Configuration'];
    dataSource = MOCK_DATA;
    // dataSource = this.items;
    // dataSource = this.itemService.ITEMS;
    subject = new BehaviorSubject(this.items);
    //dataSource = new ItemComponent(this.itemService, this.http);
    // dataSource = new ItemComponent( this.http);

// constructor(private http: HttpClient)  { 
constructor(private itemService: ItemService, private http: HttpClient, private router: Router)  { 
    
    this.newItem = { 
        "entity": "", 
        "tshirtSize": "", 
        "cpu": "", 
        "memory": "",
        "disk": "" 
    }
} 

getData(): Observable<Item[]>{
    return this.http.get<Item[]>(this.api);
}

getSizes() {
    this.getData().subscribe(
      res => {
        for (var i = 0; i < 3; i++) {
          this.sizes.push(res[0]["tsize"][i]["size"]);
        }
        console.log("Sizes Array: [" + this.sizes + "]");
        console.log("starting tshirt " + this.tshirtSize);
      });
}

getCPU(){
    this.getData().subscribe(
      res => {
        for ( let size in this.sizes) {
            this.cpuArray.push(res[0]["tsize"][size]["cpu"]);
        }
        // this.cpu = this.cpuArray[size];
    console.log("CPU Array: [" + this.cpuArray  + "]");
});

    //   for {var i = 0; }
    //   this.item.tshirtSize == small 
    //     cpu

    //   if (this.sizes[0] === ) {
        // this.cpu = this.cpuArray[0]; // this makes no sense
        // console.log(this.cpu); // this makes no sense
        // return this.cpu;
    //   }
  }

  getMemory() {
    this.getData().subscribe(
        res => {
          for ( let size in this.sizes) {
              this.memoryArray.push(res[0]["tsize"][size]["memory"]);
          }
          // this.cpu = this.cpuArray[size];
      console.log("Memory Array: [" + this.memoryArray + "]");
        });
  }

  getStorage() {
    this.getData().subscribe(
        res => {
          for ( let size in this.sizes) {
              this.storageArray.push(res[0]["tsize"][size]["storage"]);
          }
          // this.cpu = this.cpuArray[size];
      console.log("Storage Array: [" + this.storageArray  + "]");
        });
  }

  update() {
      console.log(this.entity + " is selected");
//     var currentIndex: number;

//     console.log("current entity selected: " + this.entity);
//     for (var i = 0; i < this.items.length; i++) {
//         if (this.items[i].entity === "db") {
//             this.isDB = true;
//         }
//         else {
//             this.isDB = false;
//         }
        
//         /*if (this.items[i].tshirtSize === this.sizes[i]) {
//             currentIndex = i;
//         }*/

//     // if (this.items[0].entity === "db") {
//     //     this.isDB = true;
//     // }
//     // else {
//     //     this.isDB = false;
//     // }


//       for (var i = 0; i < this.sizes.length; i++ ) {
//         if (this.tshirtSize === this.sizes[i]) {
//         if (this.items[i].tshirtSize === this.sizes[i]) {
//             currentIndex = i;
//         }
//     }
// }
//     this.items[i].cpu = this.cpuArray[currentIndex];
//     console.log("matching cpu: " + this.items[i].cpu);
//       }

//     console.log("current size selected: " + this.tshirtSize);


    //start
    console.log("current entity selected: " + this.entity);
    if (this.entity === "db") {
        this.isDB = true;
    }
    else {
        this.isDB = false;
    }

    console.log("current size selected: " + this.tshirtSize);
      var currentIndex: number;
      for (var i = 0; i < this.sizes.length; i++ ) {
        if (this.tshirtSize === this.sizes[i]) {
            currentIndex = i;
        }
      }
      this.cpu = this.cpuArray[currentIndex];
      console.log("matching cpu: " + this.cpu);
      this.memory = this.memoryArray[currentIndex];
      console.log("matching memory: " + this.memory);
      this.disk = this.storageArray[currentIndex];
      console.log("matching disk: " + this.disk);
    //end

    //   this.cpu = this.cpuArray[currentIndex];
    //   console.log("matching cpu: " + this.cpu);
    //   this.memory = this.memoryArray[currentIndex];
    //   console.log("matching memory: " + this.memory);
    //   this.disk = this.storageArray[currentIndex];
    //   console.log("matching disk: " + this.disk);

  } //end update()



getItems(): void { 
    this.itemService.getItems() 
    .subscribe(items => this.items = items); 
} 

add(): void {
    var xItem;
    this.http.get<DataResponse>(this.url).subscribe(data => { 
        xItem = {
            "entity": data.entity,
            "tshirtSize": data.tshirtSize,
            "cpu": data.cpu,
            "memory": data.memory,
            "disk": data.disk
        };
    this.items.push(xItem); 
    },
        (err: HttpErrorResponse) => { 
            if (err.error instanceof Error) { 
                console.log("Client-side error occured."); 
            } else { 
                console.log("Server-side error occured."); 
            } 
        }
    );

    // MOCK_DATA.push(this.newItem);
    // console.log(MOCK_DATA);
    // this.dataSource = new MatTableDataSource(MOCK_DATA);
    //this.dataSource = new MatTableDataSource(MOCK_DATA);

    // this.items.push(this.newItem);
    // this.subject.next(this.items);
    // console.log(this.subject);
    // console.log(this.items);
}

delete(index): void { 
    this.items.splice(index, 1); 
} 

submit(): void { 
    for( var i=0; i < this.items.length; i++) {
        console.log(this.items[i]);
        this.http.post(this.url, { 
            id: this.counter++, 
            // entity: this.items[i].entity, 
            entity: this.entity, 
            // tshirtSize: this.items[i].tshirtSize, 
            tshirtSize: this.tshirtSize,
            // cpu: this.items[i].cpu, 
            cpu: this.cpu, 
            // memory: this.items[i].memory, 
            memory: this.memory, 
            // disk: this.items[i].disk 
            disk: this.disk 
        }  
        ) 
            .subscribe( 
                result => { 
                    console.log(result); 
                }, 
                err => { 
                    console.log('Error occured'); 
                } 
            ); 
    }

    // this.router.navigate(['./']);
} 

// selectDB() { 
//     this.isDB = true;
//     return this.isDB; 
// } 

// selectServer(): void { 
//     this.isDB = false; 
// } 

ngOnInit() { 
    this.getItems(); 
    this.getSizes();
    this.getCPU();
    this.getMemory();
    this.getStorage();
    this.isDB = false; 
} 

} 