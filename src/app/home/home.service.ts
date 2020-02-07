import { Injectable } from '@angular/core';

import { HttpService } from 'src/app/http/http.service';

@Injectable()
export class HomeService {
  constructor(protected http: HttpService) { }

  async Get(city = 'sz') {
    const ret = await this.http.Get('/data/' + city);
    if (ret.error) {
      return null;
    }

    return ret;
  }
}
