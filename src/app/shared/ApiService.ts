import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Injector } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private headers: HttpHeaders,
    private response: Response,
    private cookies: CookieService,
    private injector: Injector
  ) {}
  // // api task
  // postTask(data: any) {
  //   return this.http.post<any>('http://192.168.1.245:3000/task', data).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }
  // getTask() {
  //   return this.http.get<any>('http://192.168.1.245:3000/task').pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }
  // updateTask(data: any, id: any) {
  //   return this.http
  //     .put<any>('http://192.168.1.245:3000/task/' + id, data)
  //     .pipe(
  //       map((res: any) => {
  //         return res;
  //       })
  //     );
  // // }
  // deleteTask(id: any) {
  //   return this.http.delete<any>('http://192.168.1.245:3000/task/' + id).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }
  // Api Board
  postBoard(data: any) {
    return this.http.post('http://192.168.1.245:3000/board', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getBoard(userId: number) {
    let headers = new headers();
    headers.append('content-type', 'application/json');
    headers.append('access-control-allow-origin', '*');
    this.people = http
      .get('http://www.mocky.io/v2/5715f13a1100004d1187d9e1', {
        headers: headers,
      })
      .map((response) => response.json());
    return this.http
      .get('http://192.168.1.245:3000/board', data, { headers: headers })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  getBoardById(id: any) {
    return this.http.get<any>('http://192.168.1.245:3000/board/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateBoard(data: any, id: any) {
    return this.http
      .patch<any>('http://192.168.1.245:3000/board/' + id, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteBoard(id: any) {
    return this.http.delete<any>('http://192.168.1.245:3000/board/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  // end board api
  // Start API list
  postList(data: any) {
    return this.http.post('http://192.168.1.245:3000/list', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getList() {
    return this.http.get<any>('http://192.168.1.245:3000/list').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateList(data: any, id: any) {
    return this.http
      .patch<any>('http://192.168.1.245:3000/list/' + id, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteList(id: any) {
    return this.http.delete<any>('http://192.168.1.245:3000/list/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  // End List API
  // start tasks API
  postTask(data: any) {
    return this.http.post('http://192.168.1.245:3000/task/create', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getTask() {
    return this.http.get<any>('http://192.168.1.245:3000/task').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateTask(data: any, id: any) {
    console.log(data, id);
    return this.http
      .put<any>('http://192.168.1.245:3000/task/' + id, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteTask(id: any) {
    return this.http.delete<any>('http://192.168.1.245:3000/task/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  // end tasks API
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
