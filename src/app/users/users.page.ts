import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user.model';
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users:User;

  constructor(private usersService:UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void{
    this.usersService.getUsers().subscribe(
      (response:any) => {
        this.users = response.users;
      }
    );
  }

}