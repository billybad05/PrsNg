import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  pageTitle: string = "Product Create"
  IsDetailPage: boolean = false;
  product: Product = new Product();

  constructor(
    private productsvc: ProductService,
    private router: Router
  ) { }

  save(): void {
    this.productsvc.create(this.product).subscribe({
      next: (res) => {
        console.debug("Product created!");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {

  }
}
