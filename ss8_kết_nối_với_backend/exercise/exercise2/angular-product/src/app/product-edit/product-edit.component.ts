import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ProductService} from "../service/product.service";
import {Category} from "../category";
import {CategoryService} from "../service/category.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new  FormControl()
  })
  category: Category[] =[];
  id: number;

  public compareWith(object1: Category, object2: Category): boolean {
    return object1 && object2 ? object1.id === object2.id : object1 === object2;
  }

  constructor(private productService: ProductService,
              private  activatedRoute: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) {

    this.activatedRoute.paramMap.subscribe(next => {
     let id = parseInt(next.get("id"));
     if(id != null){
       productService.findById(id).subscribe(next=>{
         this.productForm.patchValue(next)
       })
     }
    })
    categoryService.getAll().subscribe(next=>{
      this.category = next;
    })
  }

  ngOnInit(): void {
  }
  submit(id: number) {
    const product = this.productForm.value;
    this.productService.editProduct(product).subscribe(next=>{
      alert('Chỉnh sủa thành công');
      this.router.navigate(['']);
    })


  }

}
