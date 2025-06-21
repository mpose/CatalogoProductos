import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];
  private idCounter = 1;

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Omit<Product, 'id'>) {
    const newProduct: Product = { id: this.idCounter++, ...product };
    this.products.push(newProduct);
  }

  updateProduct(updated: Product) {
    const index = this.products.findIndex(p => p.id === updated.id);
    if (index > -1) this.products[index] = updated;
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}

