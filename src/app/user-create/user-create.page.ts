import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../users.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.page.html',
  styleUrls: ['./user-create.page.scss'],
})
export class UserCreatePage implements OnInit {

  user:User = new User();
  errors: any = {};

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {}

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
    this.usersService.createUser(this.user).subscribe(
      (response:any) => {
        this.response(response);
      }
    );
  }

}