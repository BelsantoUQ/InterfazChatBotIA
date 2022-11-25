import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { QuicklinkModule } from 'ngx-quicklink';
import { MessageQuestionComponent } from './pages/message-question/message-question.component';
import { MessageAnswerComponent } from './pages/message-answer/message-answer.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    LayoutComponent,
    MessageQuestionComponent,
    MessageAnswerComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule,
    QuicklinkModule,
    ReactiveFormsModule
  ]
})
export class WebsiteModule { }
