import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Cart } from '../types/cart.type';
import { computed, inject } from '@angular/core';
import { CartService } from '../services/cart.service';

type CartState = {
    cart: Cart, // as returned from server
    totalItemCount: number // as calculated locally -- not calculated by API
    isLoading: boolean,
    hasError: boolean
};

const initialState: CartState = {
    cart: {
        lineItems: [],
        total: 0   
    },
    totalItemCount: 0,
    isLoading: true,
    hasError: false
};

export const CartStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed(({ }) => ({
    })),
    withMethods((store, cartService = inject(CartService)) => ({
    })),
);
