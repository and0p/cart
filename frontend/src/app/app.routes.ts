import { Routes } from '@angular/router';
import { CatalogComponent } from './features/products/pages/catalog/catalog.component';

export const routes: Routes = [
    {
        path: '**',
        component: CatalogComponent,
        title: 'Catalog'
    }
];
