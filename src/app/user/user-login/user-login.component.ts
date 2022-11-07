import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  message: string = "";

  constructor(
    private sys: SystemService,
    private usersvc: UserService,
    private router: Router
  ) { }

  login(): void {
    this.sys.user = null;
    this.usersvc.login(this.username, this.password).subscribe({
      next: (res) => {
        console.debug("User:", res);
        this.sys.user = res;
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        if(err.status === 404) {
          this.message = "Username & Password were not found!"
        }
        else {
        console.error(err);
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
