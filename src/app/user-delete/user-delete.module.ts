import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDeletePageRoutingModule } from './user-delete-routing.module';

import { UserDeletePage } from './user-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserDeletePageRoutingModule
  ],
  declarations: [UserDeletePage]
})
export class UserDeletePageModule {}
