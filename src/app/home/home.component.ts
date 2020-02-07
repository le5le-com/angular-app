import { Component, OnInit, OnDestroy } from '@angular/core';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit, OnDestroy {
  data: any;

  initOpt: any = { height: 300 };

  optionsCategories: any;
  categories = [{
    name: '湖北返深感染'
  }, {
    name: '非湖北返深感染'
  }, {
    name: '本地感染'
  }];

  optionsHospital: any;

  redraw = true;
  constructor(private service: HomeService) {
    this.optionsCategories = {
      title: {
        text: '病例关系图',
        subtext: '鼠标滚动缩放视图',
      },
      tooltip: {
        trigger: 'item',
        formatter: this.tooltip
      },
      legend: [{
        orient: 'vertical',
        right: 0,
        top: 0,
        bottom: 0,
        data: this.categories.map((a) => {
          return a.name;
        })
      }],
      animation: false,
      series: [
        {
          type: 'graph',
          layout: 'force',
          data: [],
          links: [],
          categories: this.categories,
          roam: true,
          label: {
            position: 'right'
          },
          force: {
            repulsion: 100
          }
        }
      ]
    };

    const date: any[] = [];
    const days = (new Date().getTime() - new Date('2020/01/01').getTime()) / (1000 * 60 * 60 * 24);
    for (let i = 0; i < days; i++) {
      date.unshift(new Date(new Date()
        .setDate(new Date().getDate() - i))
        .toLocaleDateString());
    }

    this.optionsHospital = {
      title: {
        text: '发病-入院-治愈图',
        subtext: '单位：天',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        orient: 'vertical',
        right: 0,
        top: 0,
        bottom: 0,
        data: ['发病期', '治疗期', '治愈期']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        min: 0
      },
      yAxis: {
        type: 'category',
        data: []
      },
      series: [{
        name: '发病期',
        type: 'bar',
        stack: '总量',
        data: []
      }, {
        name: '治疗期',
        type: 'bar',
        stack: '总量',
        data: []
      }, {
        name: '治愈期',
        type: 'bar',
        stack: '总量',
        data: []
      }]
    };
  }

  async ngOnInit() {
    this.data = await this.service.Get();
    if (!this.data) {
      return;
    }

    this.parseCategories();

    this.redraw = !this.redraw;
  }

  calcDays(t1: any, t2: any) {
    return Math.floor((t2 - t1) / (1000 * 60 * 60 * 24));
  }

  parseDate(str = '') {
    if (!str) {
      return new Date();
    }

    str = str.replace('.', '/');
    return new Date('2020/' + str);
  }

  tooltip(params: any) {
    if (!params.data.src) {
      return;
    }

    return `${params.data.src.id}<br>
    性别：${params.data.src.gender}<br>
    年龄：${params.data.src.age}<br>
    发病时间：${params.data.src.sicktime}<br>
    入院时间：${params.data.src.hospitaltime}<br>
    与病源关系：${params.data.src.relationship}<br>
    `;
  }

  parseCategories() {
    const nodes: any[] = [];
    const links: any[] = [];
    const users: any[] = [];
    this.optionsHospital.series[0].data = [];
    this.optionsHospital.series[1].data = [];
    this.optionsHospital.series[2].data = [];
    for (const item of this.data.personals) {
      let category = this.categories[2].name;
      if (item.backToShenzhenFromHubei) {
        category = this.categories[0].name;
      } else if (item.backToShenzhen) {
        category = this.categories[1].name;
      }
      nodes.push({
        symbolSize: 10,
        name: item.id,
        src: item,
        category: category,
        draggable: true
      });

      users.push(item.id);
      this.optionsHospital.series[0].data.push(this.calcDays(this.parseDate(item.sicktime), this.parseDate(item.hospitaltime)));
      this.optionsHospital.series[1].data.push(this.calcDays(this.parseDate(item.hospitaltime), this.parseDate()));
      this.optionsHospital.series[2].data.push(this.calcDays(this.parseDate(), this.parseDate()));

      for (const p of this.data.personals) {
        if (p.id === item.sourceid) {
          links.push({
            source: p.id,
            target: item.id
          });
        }
      }
    }

    this.optionsCategories.series[0].data = nodes;
    this.optionsCategories.series[0].links = links;

    this.optionsHospital.yAxis.data = users;
  }

  ngOnDestroy() { }
}
