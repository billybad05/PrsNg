import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  pageTitle: string = "User Edit";
  IsDetailPage: boolean = false;
  user!: User;

  constructor(
    private sys: SystemService,
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.usersvc.edit(this.user).subscribe({
      next: (res) => {
        console.debug("User edited!");
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  } 
  ngOnInit(): void {
    this.sys.chkLogin();
    let id = this.route.snapshot.params["id"];
    this.usersvc.get(id).subscribe({
      next: (res) => {
      console.debug("User:", res);
      this.user= res;
    },
    error: (err) => {
      console.error(err);
    }

    })
  }

}
