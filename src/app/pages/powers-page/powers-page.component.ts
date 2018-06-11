import { Component } from '@angular/core';

import Power from '../../models/power';

@Component({
  selector: 'app-powers-page',
  templateUrl: './powers-page.component.html',
  styleUrls: ['./powers-page.component.css']
})
export class PowersPageComponent {
  public powerModel = new Power();
}
