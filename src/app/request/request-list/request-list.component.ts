import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  pageTitle: string = "Request List";
  requests: Request[] = [];

  constructor(
    private sys: SystemService,
    private requestsvc: RequestService
  ) { }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.requestsvc.list().subscribe({
      next: (res) => {
        console.debug("Requests:", res);
        this.requests = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
