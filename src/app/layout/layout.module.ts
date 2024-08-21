import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    MenuHeaderComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    MenuHeaderComponent,
    BannerComponent
  ]
})
export class LayoutModule { }
