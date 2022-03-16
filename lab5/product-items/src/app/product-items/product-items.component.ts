import { Component, OnInit, Input } from '@angular/core';
import { Product_item } from '../product_item';
import { PRODUCT_ITEMS} from "../product_items_arr";

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {
  @Input() category = '';
  product_items = PRODUCT_ITEMS;
  constructor() { }

  ngOnInit(): void {
  };

  increaseLike(product_item: Product_item)
  {
    product_item.likes += 1;
  }

  removeItem(name: string)
  {
    this.product_items = this.product_items.filter((x) => x.name !== name);
  }
}
