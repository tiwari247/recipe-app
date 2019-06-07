import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private authService: AuthService){}
    
    intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
        console.log("Log Request : "+req);
        let newObj = req.clone({
            params: new HttpParams().set('auth', this.authService.getToken())
        });
        return next.handle(newObj);
    }
}