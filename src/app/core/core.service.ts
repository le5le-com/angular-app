import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'le5le-store';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  public constructor(private _router: Router) {
  }

  formatTime(sepDate?: string, separate?: string, sepTime?: string, date?) {
    if (!sepDate) {
      sepDate = '';
    }
    if (!separate) {
      sepDate = '';
    }
    if (!sepTime) {
      sepDate = '';
    }
    if (!date) {
      date = new Date();
    }
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return (
      [year, month, day].map(this.formatDateNumber).join(sepDate) +
      separate +
      [hour, minute, second].map(this.formatDateNumber).join(sepTime)
    );
  }

  formatDateNumber(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
  }

  getUrlQuery(name: string) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r) {
      return unescape(r[2]);
    }
    return '';
  }

  saveToken(user: { token: string; }) {
    const remember: any = localStorage.getItem('rememberMe');
    if (remember) {
      localStorage.setItem(environment.token, user.token);
    } else {
      Cookie.set(environment.token, user.token, {
        domain: document.domain
          .split('.')
          .slice(-2)
          .join('.')
      });
    }
  }

  removeToken() {
    const remember: any = localStorage.getItem('rememberMe');
    if (remember) {
      localStorage.removeItem(environment.token);
    } else {
      Cookie.delete(environment.token, {
        domain: document.domain
          .split('.')
          .slice(-2)
          .join('.')
      });
    }
  }
}
