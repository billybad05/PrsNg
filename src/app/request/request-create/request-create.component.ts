import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  pageTitle: string = "Request Create"
  IsDetailPage: boolean = false;
  request: Request = new Request();

  constructor(
    private sys: SystemService,
    private requestsvc: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  save(): void {
      this.request.userId = this.sys.getUser()!.id;
      this.requestsvc.create(this.request).subscribe({
      next: (res) => {
        console.debug("Request created!");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin();
  }
}
