import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = "Product List"
  products: Product[] = [];

  constructor(
    private sys: SystemService,
    private productsvc: ProductService
  ) { }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.productsvc.list().subscribe({
      next: (res) => {
        console.debug("Products:", res);
        this.products = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
