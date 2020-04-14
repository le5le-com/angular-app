import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/http/http.service';
import { CoreService } from 'src/app/core/core.service';


@Injectable()
export class CmsHomeService {
  constructor(protected http: HttpService, protected coreService: CoreService) { }

  async List(params: any) {
    const ret = await this.http.QueryString(params).Get('/api/menu');
    if (ret.error || !ret.list) {
      return {
        list: [],
        count: 0
      };
    }

    return ret;
  }


}
