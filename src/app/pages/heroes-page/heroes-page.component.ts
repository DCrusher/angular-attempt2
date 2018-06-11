import { Component } from '@angular/core';

import Hero from '../../models/hero';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.css']
})
export class HeroesPageComponent {
  public heroModel = new Hero();

  // constructor(
  //   private dataService: DataFetchingService
  // ) {
  //   this.heroModel =
  // }

  // ngOnInit() {
  //   this.getData();
  // }

  // getData(): void {
  //   this.dataService.getData(this.heroModel.endpoint())
  //   .subscribe(heroes => {
  //     this.heroes = heroes;
  //   });
  // }
}
