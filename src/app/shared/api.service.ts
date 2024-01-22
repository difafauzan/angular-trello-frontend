import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // Api Task
  postTask(data: any) {
    return this.http.post<any>('http://192.168.50.99:3000/board', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getTask() {
    return this.http.get<any>('http://192.168.50.99:3000/board').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateTask(data: any, id: number) {
    return this.http
      .put<any>('http://192.168.50.99:3000/board/' + id, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteTask(id: number) {
    return this.http.delete<any>('http://192.168.50.99:3000/board/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // Api Board
  postBoard(data: any) {
    return this.http.post<any>('http://192.168.50.99:3000/board', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getBoard() {
    return this.http.get<any>('http://192.168.50.99:3000/board').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateBoard(data: any, id: number) {
    return this.http
      .put<any>('http://192.168.50.99:3000/board/' + id, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteBoard(id: number) {
    return this.http.delete<any>('http://192.168.50.99:3000/board/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
