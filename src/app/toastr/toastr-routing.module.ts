import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToastrPage } from './toastr.page';

const routes: Routes = [
  {
    path: '',
    component: ToastrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToastrPageRoutingModule {}
