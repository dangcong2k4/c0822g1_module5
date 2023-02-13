import {Component, OnInit} from '@angular/core';
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
  // products: Object = [];
  item: Product = {};

  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe(next => {
      console.log(next);
      this.products = next;
    }, error => {

    }, () => {

    });
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.productService.getAll().subscribe(data => {
      console.log(data)
      this.products = data;
    })
  }

  delete(id: number) {
    if (id != null) {
      // console.log(this.item.id);
      this.productService.delete(this.item.id).subscribe(next => {
        alert("xóa thành công")
        this.getAll()
      }, error => {
      }, () => {
      });
    }

  }


  searchName(value: string) {
    this.productService.searchName(value).subscribe(data => {
      this.products = data;
    })
  }
}
