import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ITodoItem, ITodoList } from './todo-item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private listUrl: string = 'api/allLists';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', responseType: "arraybuffer" })
  };

  constructor(private http: HttpClient) { }

  getLists(): Observable<ITodoList[]> {
    return this.http.get<ITodoList[]>(this.listUrl).pipe(
      map((listArray: ITodoList[]) => {
        const newListArray = listArray.map(list => {
          list.items = list.items.map(item => {
            item.dateGenerated = new Date(item.dateGenerated);
            return item;
          })
          return list;
        })
        return newListArray;
      })
    );
  }

  getList(id: number): Observable<ITodoList> {
    const url = `${this.listUrl}/${id}`;
    return this.http.get<ITodoList>(url).pipe(
      map((list) => {
        list.items = list.items.map(item => {
          item.dateGenerated = new Date(item.dateGenerated)
          return item;
        });
        return list;
      })
    )
  }

  updateList(list: ITodoList): Observable<ITodoList> {
    console.log(list)
    return this.http.put<ITodoList>(this.listUrl, list, this.httpOptions)
  }

  addList(list: ITodoList): Observable<ITodoList> {
    return this.http.post<ITodoList>(this.listUrl, list, this.httpOptions)
  }
}
