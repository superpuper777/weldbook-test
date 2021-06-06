import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import * as data from './mock-data.json';

@Injectable()
export class DataInterceptor implements HttpInterceptor {
  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    if (req.url.includes('https://youtube.googleapis.com/youtube/v3/search')) {
      const paramReq = req.clone({
        params: req.params.set('Weldbook', 'you are the Best'),
      });
      return next.handle(paramReq);
    } else {
      return next.handle(req);
    }
  }
}

@Injectable()
export class MockDataInterceptor implements HttpInterceptor {
  intercept( req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (
      req.url.includes('https://youtube.googleapis.com/youtube/v3/search')
    ) {
      console.log('Loaded from JSON: ', data.default);
  
      req = req.clone({
        body: data.default,
      }); 
    }
    return next.handle(req);
  }
}