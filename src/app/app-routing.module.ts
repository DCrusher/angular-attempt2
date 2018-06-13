import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesPageComponent } from './pages/heroes-page/heroes-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { PowersPageComponent } from './pages/powers-page/powers-page.component';
import { FormsPageComponent } from './pages/forms-page/forms-page.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent, data: { text: 'Dashboard' } },
  { path: 'heroes', component: HeroesPageComponent, data: { text: 'Heroes' } },
  { path: 'powers', component: PowersPageComponent, data: { text: 'Powers' } },
  { path: 'forms', component: FormsPageComponent, data: { text: 'Forms' } },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
