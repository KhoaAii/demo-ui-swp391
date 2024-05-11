import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  httpOptions: any;

  private apiServerUrl =environment.apiUrl;

  constructor(private http: HttpClient) {this.httpOptions = {
    headers: new HttpHeaders({
        "Content-Type": "application/json",
    }),
    "Access-Control-Allow-Origin": `${environment.apiUrl}`,
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Authorization": `Bearer ` + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0cmFuc2FjaHRoaWVuIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvbG9naW4iLCJleHAiOjE2ODYzODg1MzJ9.J_E02SJqieP63HVqI2_rwYxlw-znMRK7WQc_C_21i2c',
}; }
  jsEncode(param: string) {
    return encodeURIComponent(param);
  }

  public getAllProduct(name :string[], category:string,kindCluster:string,page:number = 1):Observable<any>{
    const body = {name:name, category:category,kindCluster:kindCluster};
    return this.http.post<any>(`${this.apiServerUrl}/api/product/getAllProduct?page=${page}`,body,this.httpOptions) as Observable<any>
  }
  public getProductDetail(id: number):Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/api/product/getProductDetail?id=${id}`,this.httpOptions)
  }
  // public caculatePrice(cart:CartDTO):Observable<any>{
  //   return this.http.post<any>(`${this.apiServerUrl}/api/cart/caculate`,cart,this.httpOptions)
  // }
  public saveOrder(order: any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/api/order`,order,this.httpOptions)
  }
  public addProduct(product:any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/api/product/addProduct`,product,this.httpOptions)
  }
  public getTotalProduct(name :string[],category:string, kindCluster:string):Observable<any>{
    const body = {name:name, category:category, kindCluster:kindCluster};
    return this.http.post<any>(`${this.apiServerUrl}/api/product/find`,body,this.httpOptions) as Observable<any>

  }
  public findTotalNewInKeyWord(name :string[],category:string, kindCluster:string):Observable<any>{
    const body = {name:name, category:category, kindCluster:kindCluster};
    return this.http.post<any>(`${this.apiServerUrl}/api/product/findTotalNewInKeyWord`,body,this.httpOptions) as Observable<any>

  }

  public findTotalNewInCluster():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/api/product/findTotalNewInCluster`,this.httpOptions) as Observable<any>

  }
  public getAllListNewSave(name :string[]):Observable<any>{
    const body = {name:name};
    return this.http.post<any>(`${this.apiServerUrl}/api/product/findListNewSave`,body,this.httpOptions) as Observable<any>

  }
}
