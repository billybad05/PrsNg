import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  constructor(
    private sys: SystemService
  ) { }

  ngOnInit(): void {
    this.sys.chkLogin();
  }

}
