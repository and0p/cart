import { Product } from "../../products/types/products.type"

export type Cart = {
    lineItems: LineItem[],
    total: number
}

export type LineItem = {
    product: Product,
    quantity: number,
    subtotal: number
}