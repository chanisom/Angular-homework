import { NgIf } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  discount(){
    return (this.product.price * this.product.discountPercentage) / 100;
  }
 @Input() product : any;
}
