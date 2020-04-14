import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Le5leComponentsModule } from 'le5le-components';

import { HtmlPipe } from './pipes/html.pipe';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    Le5leComponentsModule
  ],
  declarations: [HtmlPipe, LeftMenuComponent],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HtmlPipe,
    Le5leComponentsModule,
    LeftMenuComponent
  ],
  providers: []
})
export class SharedModule { }
