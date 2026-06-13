import { HttpClient } from '@angular/common/http';
import { computed, inject, Service, signal } from '@angular/core';
import { Cart } from '../types/cart.type';

@Service()
export class CartService {
  private http = inject(HttpClient);

  isLoading = signal<boolean>(true);

  cart = signal<Cart>({
    lineItems: [], total: 0
  });

  itemCount = computed<number>(() => this.cart().lineItems.length);
  total = computed<number>(() => this.cart().total);

  async getCurrentCart(): Promise<any> {
    // TODO stub
    return {};
  }

  async addItem(item: string, quantity: number): Promise<any> {
    // TODO stub
    return {};
  }
}
