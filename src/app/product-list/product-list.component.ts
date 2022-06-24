import { Component, OnInit } from '@angular/core';

import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor() { }

  ngOnInit(): void {
  }

  compartilhar(): void {
    window.alert("O produto foi bem compartilhado!")
  }

  onNotificar(): void {
    window.alert("Você será notificado quando o produto estiver à venda!")
  }
}
