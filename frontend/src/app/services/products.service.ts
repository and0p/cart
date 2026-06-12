import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Products {
  // private http = inject(HttpClient);
  
  async getProducts(): Promise<any[]> {
    // Stubbed for now
    return [];
  }
}
