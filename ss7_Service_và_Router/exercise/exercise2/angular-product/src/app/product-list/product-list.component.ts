import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  id: number;
  products: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.products = this.productService.getAll();
  }

  deleteArticle(id: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == this.id) {
        this.products.splice(i,1);
      }
    }
  }

  deleteArticle1(id: number) {
    this.id=id;
  }
}
