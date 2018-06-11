import { Component, OnInit } from '@angular/core';
import { DataFetchingService } from '../../services/data-fetching.service';

import Hero from '../../models/Hero';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.css']
})
export class HeroesPageComponent implements OnInit {
  public heroes: any[];
  public tableFields: any[];
  public instanceFields: any[];
  public heroModel: Hero;

  constructor(
    private dataService: DataFetchingService
  ) {
    this.heroModel = new Hero();
    this.tableFields = this.heroModel.fieldsToView();
    this.instanceFields = this.heroModel.fieldsToManipulate();
  }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.dataService.getData(this.heroModel.endpoint())
    .subscribe(heroes => {
      this.heroes = heroes;
    });
  }
}
