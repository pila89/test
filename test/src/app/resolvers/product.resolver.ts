import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductResponse } from '../models/product';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductResponse> {
  constructor(private _productsService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductResponse> {
    return this._productsService.getAllProducts();
  }
}
