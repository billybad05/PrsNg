import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  pageTitle: string = "Vendor List";
  vendors: Vendor[] = [];

  constructor(
    private sys: SystemService,
    private vendorsvc: VendorService
  ) { }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.vendorsvc.list().subscribe({
      next: (res) => {
        console.debug("Vendors:", res);
        this.vendors = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
