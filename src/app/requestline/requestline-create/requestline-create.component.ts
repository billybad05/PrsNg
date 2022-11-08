import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  IsDetailPage: boolean = false;
  pageTitle: string = "Requestline Create"
  requestline: Requestline = new Requestline();
  products!: Product[];

  constructor(
    private sys: SystemService,
    private requestlinesvc: RequestlineService,
    private router: Router,
    private productsvc: ProductService,
    private route: ActivatedRoute
  ) { }

  save(): void {
    this.requestlinesvc.create(this.requestline).subscribe({
      next: (res) => {
        console.debug("Requestline added.");
        this.router.navigateByUrl(`/requestline/requestlines/${this.requestline.requestId}`);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.requestline.requestId = +this.route.snapshot.params["id"];
    this.productsvc.list().subscribe({
      next: (res) => {
        console.debug("Product:", res);
        this.products = res;
      },
      error: (err) => console.error(err)
    });
  }
} 
