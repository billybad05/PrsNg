import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Request } from 'src/app/request/request.class';
import { RequestService } from 'src/app/request/request.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';


@Component({
  selector: 'app-requestlines',
  templateUrl: './requestlines.component.html',
  styleUrls: ['./requestlines.component.css']
})
export class RequestlinesComponent implements OnInit {

  pageTitle: string = "Request Lines"
  request!: Request

  constructor(

    private sys: SystemService,
    private requestlinesvc: RequestlineService,
    private route: ActivatedRoute, 
    private requestsvc: RequestService, 
    private router: Router
    

    ) { }

    review(): void {
      this.requestsvc.review(this.request).subscribe({
        next: (res) => {
          console.debug("Request reviewed");
          this.refresh();
        },
        error: (err) => console.error(err)
      });
    }
    edit(rl: Requestline): void {
      this.router.navigateByUrl(`/requestline/edit/${rl.id}`)
    }
    remove(rl: Requestline): void {
      this.requestlinesvc.remove(rl.id).subscribe({
        next: (res) => {
          console.debug("Requestline removed");
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