import { Component, OnInit } from '@angular/core';
import {PRODUCT_CATEGORIES} from "../product_categories_arr";
import {PRODUCT_ITEMS} from "../product_items_arr";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product_categories = PRODUCT_CATEGORIES;
  product_items = PRODUCT_ITEMS;

  headset = 'headset';
  speaker = 'speaker';
  microphone = 'microphone';
  webcam = 'webcam';
  isSelHeadset = false;
  isSelMic = false;
  isSelSpeaker = false;
  isSelWebcam = false;
  constructor() { }

  ngOnInit(): void {
  }

}
