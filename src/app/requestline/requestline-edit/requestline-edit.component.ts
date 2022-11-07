import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  constructor(
    private sys: SystemService
  ) { }

  ngOnInit(): void {
    this.sys.chkLogin();
  }

}
