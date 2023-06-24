import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductResponse } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products?: Product[];

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this._route.data.subscribe(
      (data: { reponse?: ProductResponse }) => {
        this.products = data.reponse?.products;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
