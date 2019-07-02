import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FormModule } from 'le5le-components/form';
import { AvatarModule } from 'le5le-components/avatar';
import { EscModule } from 'le5le-components/esc';
import { LazyLoadModule } from 'le5le-components/lazyLoad';
import { FileUploadModule } from 'le5le-components/fileUpload';
import { LoadingModule } from 'le5le-components/loading';
import { MoveModule } from 'le5le-components/move';
import { SelectModule } from 'le5le-components/select';
import { PaginationModule } from 'le5le-components/pagination';
import { ProgressModule } from 'le5le-components/progress';
// import { SwitchModule } from 'le5le-components/switch';
// import { QrcodeModule } from 'le5le-components/qrcode';
// import { WizardModule } from 'le5le-components/wizard';
// import { DatetimeModule } from 'le5le-components/datetime';
// import { SliderModule } from 'le5le-components/slider';
// import { EditorModule } from 'le5le-components/editor';
// import { RateModule } from 'le5le-components/rate';

import { HtmlPipe } from './pipes/html.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    FormModule,
    AvatarModule,
    EscModule,
    LazyLoadModule,
    FileUploadModule,
    LoadingModule,
    SelectModule,
    PaginationModule,
    MoveModule,
    ProgressModule
  ],
  declarations: [HtmlPipe],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HtmlPipe,
    FormModule,
    AvatarModule,
    EscModule,
    LazyLoadModule,
    FileUploadModule,
    LoadingModule,
    SelectModule,
    PaginationModule,
    MoveModule,
    ProgressModule
  ],
  providers: []
})
export class SharedModule {}
