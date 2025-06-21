import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit, OnChanges {
  @Input() editingProduct?: Product;
  @Output() formSaved = new EventEmitter<void>();

  productForm!: FormGroup;

  constructor(private fb: FormBuilder, private service: ProductService) {}


  get providerEmail() {
    return this.productForm.get('providerEmail');
  }

  get price() {
    return this.productForm.get('price');
  }

  
  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0.01)]],
      providerEmail: ['', [Validators.required, Validators.email]],
      entryDate: ['', Validators.required]
    });
    
    if (this.editingProduct) {
      this.productForm.patchValue(this.editingProduct);
    }
  }

  ngOnChanges() {

    if (!this.productForm) return; // ← Protección contra acceso antes de tiempo
    if (this.editingProduct) {
      this.productForm.patchValue(this.editingProduct);
  
      // Marcamos todos los controles como tocados y forzamos su validación
      Object.values(this.productForm.controls).forEach(control => {
        control.markAsTouched();
        control.updateValueAndValidity();
      });
  
      // También actualizamos el estado del formulario completo
      this.productForm.updateValueAndValidity();
    } else {
      this.productForm.reset();
    }
  }
  

  onSubmit() {
    if (this.productForm.invalid) return;

    const product = this.productForm.value;

    if (this.editingProduct) {
      this.service.updateProduct({ ...product, id: this.editingProduct.id });
    } else {
      this.service.addProduct(product);
    }

    this.productForm.reset();
    this.formSaved.emit();
  }
}
