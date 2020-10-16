import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToastrPageRoutingModule } from './toastr-routing.module';

import { ToastrPage } from './toastr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToastrPageRoutingModule
  ],
  declarations: [ToastrPage]
})
export class ToastrPageModule {}
