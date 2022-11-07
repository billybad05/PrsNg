import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Vendor } from 'src/app/vendor/vendor.class';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  pageTitle: string = "Product Create"
  IsDetailPage: boolean = false;
  product: Product = new Product();
  vendor!: Vendor[];

  constructor(
    private vendorsvc:VendorService,
    private sys: SystemService,
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
    this.sys.chkLogin();
    this.vendorsvc.list().subscribe({
      next: (res) => { 
        console.debug("Vendor:", res);
        this.vendor = res;
      },
      error: (err) => console.error(err)
    });
  }
}