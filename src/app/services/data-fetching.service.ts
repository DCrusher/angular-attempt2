import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataFetchingService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getData (dataEndpoint): Observable<any[]> {
    return this.http.get<any[]>(dataEndpoint)
      .pipe(
        tap(items => this.log(`fetched items from ${dataEndpoint}`)),
        catchError(this.handleError(`getData with errors from ${dataEndpoint}`, []))
      );
  }

  add(dataEndpoint: string, item: any): Observable<any> {
    return this.http.post<any>(dataEndpoint, item, httpOptions).pipe(
      tap((_item: any) => this.log(`added item w/ id=${item.id}`)),
      catchError(this.handleError<any>('addItem'))
    );
  }

  update(dataEndpoint: string, item: any): Observable<any> {
    return this.http.put(dataEndpoint, item, httpOptions).pipe(
      tap(_ => this.log(`updated item id=${item.id}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }

  search(dataModel: any, term: string): Observable<any[]> {
    if (!term.trim()) {
      // if not search term, return empty item array.
      return of([]);
    }
    return this.http.get<any[]>(`${dataModel.apiEndpoint}/?name=${term}`).pipe(
      tap(_ => this.log(`found items matching "${term}"`)),
      catchError(this.handleError<any[]>('searchItemes', []))
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a ItemService message with the MessageService */
  private log(message: string) {
    this.messageService.add('DataService: ' + message);
  }
}
