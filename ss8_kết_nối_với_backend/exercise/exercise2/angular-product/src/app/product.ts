import {Category} from "./category";

export interface Product {
  id?: number;
  name?: string;
  price?: number;
  description?: String;
  category?: Category;
}
