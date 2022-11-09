import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { Requestline } from 'src/app/requestline/requestline.class';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {

  pageTitle: string = "Request Review";
  request!: Request;
  showVerifyButton: boolean = false;

  constructor(
    private sys: SystemService,
    private router: Router,
    private requestsvc: RequestService,
    private route: ActivatedRoute 
  ) { }

  review(): void {
    this.requestsvc.review(this.request).subscribe({
      next: (res) => {
        console.debug("Review:");
        this.refresh();
      },
      error: (err) => console.error(err) 
    });
  }
  edit(reqline: Requestline): void {
    this.router.navigateByUrl(`/requestlines/edit/${reqline.id}`);
  }
  remove(reqline: Requestline): void {
    this.requestsvc.remove(reqline.id).subscribe({
      next: (res) => {
        console.debug("Requestline removed");
        this.refresh();
      },
      error: (err) => console.error(err)
    });
  }

  approve(): void {
    this.requestsvc.approve(this.request).subscribe({
      next: (res) => {
        console.debug("Request approved.");
        this.refresh();
      },
      error: (err) => console.error(err)
    });
  }
  reject(): void {
    this.showVerifyButton = !this.showVerifyButton;
  }
  verifyReject(): void {
    this.showVerifyButton = false;
    this.requestsvc.reject(this.request).subscribe({
      next: (res) => {
        console.debug("Request rejected.");
        this.refresh();
      },
      error: (err) => console.error(err)
    });
  }

  refresh(): void {
    let id = this.route.snapshot.params["id"];
    this.requestsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res);
        this.request = res;
      },
      error: (err) => console.error(err)
    });
  }


  ngOnInit(): void {
    this.sys.chkLogin();
    this.refresh();
  }

}
