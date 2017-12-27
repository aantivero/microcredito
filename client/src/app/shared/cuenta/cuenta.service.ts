import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CuentaService {
  public API = '//localhost:8080';
  public CUENTA_API = this.API + '/cuentas';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/todas');
  }
  get(id: String) {
    return this.http.get(this.CUENTA_API + '/' + id);
  }
  save(cuenta: any): Observable<any> {
    let result: Observable<Object>;
    if(cuenta['href']) {
      result = this.http.put(cuenta.href, cuenta);
    } else {
      result = this.http.post(this.CUENTA_API, cuenta);
    }
    return result;
  }
  remove(href: string) {
    return this.http.delete(href);
  }
}
