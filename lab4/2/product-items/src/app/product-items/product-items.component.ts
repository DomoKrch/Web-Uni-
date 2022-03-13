import { Component, OnInit } from '@angular/core';
import { Product_item } from '../product_item';
import { PRODUCT_ITEMS} from "../product_items_arr";

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {
  product_items = PRODUCT_ITEMS;
  constructor() { }

  ngOnInit(): void {
  };

}
