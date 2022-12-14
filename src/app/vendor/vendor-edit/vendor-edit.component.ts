import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  pageTitle: string = "Vendor Edit";
  IsDetailPage: boolean = false;
  vendor!: Vendor;

  constructor(
    private sys: SystemService,
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.vendorsvc.edit(this.vendor).subscribe({
      next: (res) => {
        console.debug("Vendor edited!");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  } 
  ngOnInit(): void {
    this.sys.chkLogin();
    let id = this.route.snapshot.params["id"];
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
