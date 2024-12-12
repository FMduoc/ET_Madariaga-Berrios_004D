import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisJustifPageRoutingModule } from './mis-justif-routing.module';

import { MisJustifPage } from './mis-justif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisJustifPageRoutingModule
  ],
  declarations: [MisJustifPage]
})
export class MisJustifPageModule {}
