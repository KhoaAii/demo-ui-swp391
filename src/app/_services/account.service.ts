import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from "../../environments/environment";
import { User } from "../_models";

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;
    httpOptions: any;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
        this.httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
            }),
            "Access-Control-Allow-Origin": `${environment.apiUrl}`,
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Authorization": `Bearer `+localStorage.getItem("user"),
        };
    }

    public get userValue() {
        return this.userSubject.value;
    }

    login(username: string, password: string) {

      const credentials = {
        email: username,
        password: password
      };

      const jsonString = JSON.stringify(credentials);
      // let kq = '{\'email\':'+username+',\'password\':' +password+'}';
      //   const body = JSON.parse(kq);
      //   console.log(body);
          // new HttpParams()
          //   .set(`email`, username)
          //   .set(`password`, password);
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            "Access-Control-Allow-Origin": `*`,
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        };
        return this.http.post<User>(`${environment.apiUrl}/shop/auth/login`,jsonString,httpOptions)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login'], { relativeTo: this.route });
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/api/user/save`, user,this.httpOptions);
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }
    getByUsername(username: string) {
        return this.http.get<User>(`${environment.apiUrl}/api/user/get?username=${username}`);
    }

    update(id: string, params: any) {
        return this.http.put(`${environment.apiUrl}/users/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.userValue?.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }
    updateUser(user:User) :Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/api/user/update`,user,this.httpOptions);
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.userValue?.id) {
                    this.logout();
                }
                return x;
            }));
    }
}
