import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, inject } from "@angular/core";
import { ProductService } from "../../services/products.service";
import { ProductStore } from "../../store/products.store";

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CatalogComponent {
  productService = inject(ProductService);
  productStore = inject(ProductStore);

  constructor() {
    this.productStore.loadProducts();
  }
}