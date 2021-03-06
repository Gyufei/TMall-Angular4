/*
 * 目前使用 EASYMOCK 网站提供的在线 MOCK 服务进行后端的数据请求 API 模拟。
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http'

import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Rest {

  constructor(private http: HttpClient) { }

  public get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    const url = `${environment.baseUrl}${path}`
    return this.http.get(url, { params })
      .pipe(catchError(this.handleError))
  }

  public post(path: string, body: Object = {}): Observable<any> {
    const url = `${environment.baseUrl}${path}`
    return this.http.post(url, JSON.stringify(body))
      .pipe(catchError(this.handleError))
  }

  public put(path: string, body: Object = {}): Observable<any> {
    const url = `${environment.baseUrl}${path}`
    return this.http.put(url, JSON.stringify(body))
      .pipe(catchError(this.handleError))
  }

  public delete(path: string): Observable<any> {
    const url = `${environment.baseUrl}${path}`
    return this.http.delete(url)
      .pipe(catchError(this.handleError))
  }

  // 错误处理
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured:', error.error.message)
    } else {
      console.error(
        `Backend return code ${error.status}, body was: ${error.error}`
      )
    }

    return throwError('something bad happened; please try again later')
  }
}
