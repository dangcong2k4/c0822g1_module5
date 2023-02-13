import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {CategoryService} from "../service/category.service";
import {Category} from "../category";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: Category[] =[];
  constructor(private categoryService: CategoryService) {
    this.categoryService.getAll().subscribe(next => {
      console.log(next);
      this.category = next;
    }, error => {

    }, () => {

    });
  }

  ngOnInit(): void {
  }

}
