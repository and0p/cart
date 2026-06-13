import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Product } from '../types/products.type';
import { computed, inject } from '@angular/core';
import { ProductService } from '../services/products.service';

type ProductState = {
    products: Product[];
    isLoading: boolean;
    hasError: boolean;
    filter: string;
};

const initialState: ProductState = {
    products: [],
    isLoading: true,
    hasError: false,
    filter: '',
};

export const ProductStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed(({ products, filter }) => ({
        filteredProducts: computed(() =>
            filter() !== ''
                ? products().filter((product) => product.title.includes(filter()))
                : products(),
        ),
    })),
    withMethods((store, productService = inject(ProductService)) => ({
        loadProducts() {
            patchState(store, { isLoading: true });
            productService.getProducts().subscribe({
                next: (products: Product[]) => {
                    // TODO could set error to false in case we allow user to retry
                    patchState(store, { products, isLoading: false });
                },
                error: () => {
                    patchState(store, { hasError: true, isLoading: false });
                },
            });
        },
    })),
);
