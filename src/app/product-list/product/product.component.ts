import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() prd: Product;
  @Output() unSelectEventOutputEvent = new EventEmitter<void>();
  constructor() {}
  ngOnInit(): void {}

  unselectProduct() {
    this.unSelectEventOutputEvent.emit();
  }
}
