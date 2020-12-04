import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDeletePage } from './user-delete.page';

const routes: Routes = [
  {
    path: '',
    component: UserDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDeletePageRoutingModule {}
