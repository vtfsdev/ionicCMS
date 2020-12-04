import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UsersService } from '../users.service';
import { User } from '../user.model'; 

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
})
export class UserEditPage implements OnInit {

  user: User;
  errors: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getUser(params['userId']);
    });
  }

  response(response): void{

    if(response.success===false){

      if( response.errors.name == 'MissingUsernameError' ){
        this.errors.username = 'Please enter a username';
      }

      if( response.errors.name == 'UserExistsError' ){
        this.errors.username = 'A user with the given username is already registered';
      }

      if( response.errors.email ){
        this.errors.email = response.errors.errors.email.message;
      }

    }

    if(response.success===true){
      this.router.navigate(['/users']);
    }
  }

  onSubmit(): void{
    this.usersService.updateUser(this.user).subscribe(
      (response:any) => {
        this.response(response);
      }
    );
  }

  getUser(id:string):void {
    this.usersService.getUser(id).subscribe(
      (response:any)=>{
        this.user = response.user;
      }
    );
  }
}