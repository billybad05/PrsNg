import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  pageTitle: string = "Vendor Detail";
  IsDetailPage: boolean = true;
  vendor!: Vendor;

  constructor(
    private sys: SystemService,
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  showVerifyButton: boolean = false;

  remove(): void {
    this.showVerifyButton = !this.showVerifyButton;
  }

  verifyDelete(): void {
    this.vendorsvc.remove(this.vendor.id).subscribe({
      next: (res) => {
        console.debug("Vendor deleted!");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    let id = +this.route.snapshot.params["id"];
    this.vendorsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Vendor:", res);
        this.vendor= res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}

