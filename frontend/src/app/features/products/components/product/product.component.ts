import { ChangeDetectionStrategy, Component, computed, CUSTOM_ELEMENTS_SCHEMA, input, signal } from "@angular/core";

import { Product } from "../../types/products.type";

import { MatCardContent, MatCardHeader, MatCardModule, MatCardSubtitle, MatCardTitle, MatCardImage } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardImage, MatButtonModule, MatInputModule, MatFormFieldModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductComponent {
  product = input<Product>();

  amount = signal<number>(0);

  test = computed(() => {
    console.log(this.amount());
  })

  incrementAmount = () => {
    this.amount.update(current => current + 1);
  }

  decrementAmount = () => {
    this.amount.update(current => current - 1);
  }

  buy = () => {
    // TODO cart store add by current amount
  }
}