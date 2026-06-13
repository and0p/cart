import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Product } from '../types/products.type';
import { Observable } from 'rxjs';

@Service()
export class ProductService {
    private http = inject(HttpClient);

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>('https://dummyjson.com/products');
    }
}
