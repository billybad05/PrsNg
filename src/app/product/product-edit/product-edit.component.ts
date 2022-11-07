import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  pageTitle: string = "Product Edit";
  IsDetailPage: boolean = false;
  product!: Product;
  vendors: Vendor[] = [];

  constructor(
    private vendorsvc: VendorService,
    private sys: SystemService,
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.productsvc.edit(this.product).subscribe({
      next: (res) => {
        console.debug("Product edited!");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  } 
  ngOnInit(): void {
    this.sys.chkLogin();
    let id = this.route.snapshot.params["id"];
    this.productsvc.get(id).subscribe({
      next: (res) => {
      console.debug("Product:", res);
      this.product= res;
    },
    error: (err) => {
      console.error(err);
    }
    });
  this.vendorsvc.list().subscribe({
    next: (res) => { 
      console.debug("Vendor:", res);
      this.vendors = res;
    },
    error: (err) => console.error(err)
  });
}
}