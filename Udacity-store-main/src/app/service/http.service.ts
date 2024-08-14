import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Comment[]> {
    return this.http.get<Comment[]>('http://lc-ci.s3-website-us-east-1.amazonaws.com/assets/data.json');
  }
}
