import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";
import {CategoryService} from "../service/category.service";
import {Category} from "../category";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  category: Category[] = [];
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });
  constructor(private productService: ProductService,private router: Router,private categoryService: CategoryService) {
    this.categoryService.getAll().subscribe(next=>{
        this.category = next
    })
  }

  ngOnInit(): void {
  }
  submit() {
    this.productForm.value.id = parseInt(this.productForm.value.id);
   this.productService.saveProduct(this.productForm.value).subscribe( next => {
      alert("Thêm mới thành công")
      this.router.navigateByUrl("")
    }, error => {
    }, () => {
    });
  }
}
