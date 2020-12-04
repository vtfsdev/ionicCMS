import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UsersService } from '../users.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.page.html',
  styleUrls: ['./user-delete.page.scss'],
})
export class UserDeletePage implements OnInit {
  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.getUser(params['userId']);
      }
    );
  }
  deleteUser(id: string) :void{
    this.usersService.deleteUser(id).subscribe(
      (response:any)=>{
        if(response.success == true){
          this.router.navigate(['/users']);
        }
      }
    );
  }

  getUser(id: string): void{
    this.usersService.getUser(id).subscribe(
      (response:any)=>{
        this.user = response.user;
      }
    );
  }
}