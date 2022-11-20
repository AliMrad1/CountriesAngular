import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const cloneReq = req.clone({
          params: req.params.set(
            "auth-token",
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
          ),
        })
        return next.handle(cloneReq);
    }
}