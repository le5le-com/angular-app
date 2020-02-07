import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Store } from 'le5le-store';

import { NoticeService } from 'le5le-components/notice';
import { HttpService } from '../http/http.service';
import { CoreService } from './core.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
  providers: [NoticeService, HttpService]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
    private _router: Router,
    private _httpService: HttpService,
    private _coreService: CoreService
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }

    Store.set('author', 'alsmile123@qq.com');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }


}
