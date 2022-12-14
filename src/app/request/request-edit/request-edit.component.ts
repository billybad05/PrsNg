import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  pageTitle: string = "Request Edit";
  IsDetailPage: boolean = false;
  request!: Request;

  constructor(
    private sys: SystemService,
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.requestsvc.edit(this.request).subscribe({
      next: (res) => {
        console.debug("Request edited!");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  } 
  ngOnInit(): void {
    this.sys.chkLogin();
    let id = this.route.snapshot.params["id"];
    this.requestsvc.get(id).subscribe({
      next: (res) => {
      console.debug("Request:", res);
      this.request= res;
    },
    error: (err) => {
      console.error(err);
    }

    })
  }

}