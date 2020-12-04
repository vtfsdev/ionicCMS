import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../users.service';
import { User } from '../user.model'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user: User;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getUser(params['userId']);
    });
  }

  getUser(id:string):void {
    this.usersService.getUser(id).subscribe(
      (response:any)=>{
        this.user = response.user;
      }
    );
  }
}