import { Component, OnInit } from '@angular/core';
import { CmsHomeService } from './home.service';

@Component({
  selector: 'app-cms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [CmsHomeService]
})
export class CmsHomeComponent implements OnInit {
  search = '';
  constructor(private service: CmsHomeService) { }

  ngOnInit() {
  }

}
