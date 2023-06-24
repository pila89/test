import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products?: Product[];
  loading = false;
  constructor(private _productsService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.loading = true;
    this._productsService.getAllProducts().subscribe(
      (response) => {
        this.products = response.products;
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
