import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CmsRoutingModule } from './cms-routing.module';
import { CmsComponent } from './cms.component';
import { CmsHomeComponent } from './home/home.component';

@NgModule({
  declarations: [CmsComponent, CmsHomeComponent],
  imports: [
    SharedModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
