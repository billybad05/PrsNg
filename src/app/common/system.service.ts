import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  baseurl: string = "http://localhost:5555/api";

  user: any = null;

  constructor(
    private router: Router
  ) { }

  chkLogin(): void {
    if(this.user === null) {
      this.router.navigateByUrl("/user/login")
    }
  }
  getUser(): User | null {
    return this.user;
  }
}

