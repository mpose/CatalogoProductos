import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  selectedProduct?: Product;

  constructor(public service: ProductService) {}

  delete(id: number) {
    this.service.deleteProduct(id);
    this.selectedProduct = undefined;
  }

  edit(product: Product) {
    this.selectedProduct = { ...product }; // hacemos copia para no editar directo
  }

  clearForm() {
    this.selectedProduct = undefined;
  }
}
