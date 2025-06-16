import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WebContent {
  id: number;
  section: string;
  content: string;
  image?: string;
  visible?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class WebContentService {
  private baseUrl = 'http://localhost:8000/api/web-contents';

  constructor(private http: HttpClient) {}

  getAll(): Observable<WebContent[]> {
    return this.http.get<WebContent[]>(this.baseUrl);
  }

  getBySection(section: string): Observable<WebContent | undefined> {
    return new Observable(observer => {
      this.getAll().subscribe(all => {
        const found = all.find(item => item.section.toLowerCase() === section.toLowerCase());
        observer.next(found);
        observer.complete();
      });
    });
  }

  update(id: number, data: Partial<WebContent>): Observable<WebContent> {
    return this.http.put<WebContent>(`${this.baseUrl}/${id}`, data, { withCredentials: true });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { withCredentials: true });
  }
}
