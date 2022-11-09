import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  IsDetailPage: boolean = false;
  pageTitle: string = "Requestline Edit"
  products!: Product[];
  requestline!: Requestline;

  constructor(
    private sys: SystemService,
    private requestlinesvc: RequestlineService,
    private router: Router,
    private productsvc: ProductService,
    private route: ActivatedRoute

  ) { }

  save(): void {
    this.requestline.productId = +this.requestline.productId;
    this.requestlinesvc.edit(this.requestline).subscribe({
      next: (res) => {
        console.debug("Requestline added");
        this.router.navigateByUrl(`/requestline/requestlines/${this.requestline.requestId}`);
      },
      error: (err) => console.error(err)
    });
  }
  ngOnInit(): void {
    this.sys.chkLogin();
    this.productsvc.list().subscribe({
      next: (res) => {
       console.debug("Products:", res);
        this.products = res;
      },
      error: (err) => console.error(err)
    });
    let id = +this.route.snapshot.params["id"];
    this.requestlinesvc.get(id).subscribe({
      next: (res) => {
        console.debug("Requestline:", res);
        this.requestline = res;
      },
      error: (err) => console.error(err)
    });
  }

}
