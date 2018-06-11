import { Component } from '@angular/core';
import Hero from '../../models/hero';
import Power from '../../models/power';
// import { DynamicSelectModel } from '@ng-dynamic-form/core';
@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {
  title = 'dashboard';
  public heroesRelation: any;
  public powersRelation: any;

  constructor() {
    this.heroesRelation = {
      dataModel: new Hero()
    };
    this.powersRelation = {
      dataModel: new Power()
    };
  }
}
