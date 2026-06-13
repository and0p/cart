import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, inject } from "@angular/core";
import { CartService } from "../../../features/cart/services/cart.service";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { CartStore } from "../../../features/cart/store/cart.store";

@Component({
  selector: 'product-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, MatButtonModule, MatBadgeModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent {
    cartService = inject(CartService);
    cartStore = inject(CartStore)
}