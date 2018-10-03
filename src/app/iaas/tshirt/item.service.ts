import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {DataSource} from '@angular/cdk/collections';

export class Item {
  entity: string;
  tshirtSize: string;
  cpu: string;
  memory: string;
  disk: string;
}

export const ITEMS: Item[] = [
  //   { entity: 'server', tshirtSize: 's', cpu: '10', memory: '', disk: '' },
  //   { entity: 'db', tshirtSize: 'm', cpu: '', memory: '', disk: '' },
    { entity: '', tshirtSize: '', cpu: '', memory: '', disk: '' }
  ];

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
// @Injectable()
export class ItemService {
// export class ItemService extends DataSource<any> {

  // connect(): Observable<any[]> {
  //   return this._list$;
  // }

  // disconnect() {
  // }

  
  // constructor(private http: HttpClient, private _list$: Observable<any[]>) { 
    constructor(private http: HttpClient) { 
    // super();
  }

  // itemUrl = 'api/items';

  getItems(): Observable<Item[]> {
    return of(ITEMS);
  }

  /** GET heroes from the server */
  // getItems (): Observable<Item[]> {
  //   return this.http.get<Item[]>(this.itemUrl)
  //     .pipe(
  //       catchError(this.handleError('getHeroes', []))
  //     );
  // }

    private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  //////// Save methods //////////

  
  /** POST: add a new item to the server */
  // addItem (item: Item): Observable<Item> {
  //   return this.http.post<Item>(this.heroesUrl, item, httpOptions).pipe(
  //     catchError(this.handleError<Item>('addItem'))
  //   );
  // }

    /** DELETE: delete the item from the server */
  // deleteItem (item: Item | number): Observable<Item> {
  //   const id = typeof item === 'number' ? item : item.id;
  //   const url = `${this.heroesUrl}/${id}`;

  //   return this.http.delete<Item>(url, httpOptions).pipe(
  //     catchError(this.handleError<Item>('deleteItem'))
  //   );
  // }

}