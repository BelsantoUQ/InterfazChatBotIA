import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ImgComponent } from './components/img/img.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TimeAgoPipe,
    ImgComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ImgComponent,
    TimeAgoPipe
  ]
})
export class SharedModule { }
