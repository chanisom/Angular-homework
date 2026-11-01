import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-electrical-products',
  standalone: true,
  imports: [ProductCardComponent,NgFor],
  templateUrl: './electrical-products.component.html',
  styleUrl: './electrical-products.component.css'
})
export class ElectricalProductsComponent {
  products = [
    { name: 'מנורה', company: 'חברה A', description: 'מנורה LED', discountPercentage: 10, price: 50 },
    { name: 'מכונת כביסה', company: 'חברה B', description: 'מכונת כביסה 8 ק"ג', discountPercentage: 15, price: 2000 },
    { name: 'מחשב נייד', company: 'חברה C', description: 'מחשב נייד 15" Core i5', discountPercentage: 20, price: 1500 },
    { name: 'מקרר', company: 'חברה B', description: 'מקרר 27 ק"ג', discountPercentage: 25, price: 3000 },
    { name: 'מייבש שיער', company: 'חברה A', description: 'מייבש שיער עם טורבו', discountPercentage: 30, price: 100 }
  ];

}
