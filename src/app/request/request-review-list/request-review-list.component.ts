import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {
  
  pageTitle: string = "Request to Review";
  requests!: Request[];

  constructor(
    private requestsvc: RequestService,
    private sys: SystemService
  ) { }

  ngOnInit(): void {
    this.sys.chkLogin();
    let userId = this.sys.getUser()!.id;
    this.requestsvc.reviews(userId).subscribe({
      next: (res) => {console.log (res);
        console.debug(res);
        this.requests = res;
      },
      error: (err) => console.error(err)
    });
  }
}