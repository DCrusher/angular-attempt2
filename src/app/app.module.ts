import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AgGridModule } from 'ag-grid-angular';

import { InMemoryDataService } from './services/in-memory-data.service';
import { DataFetchingService } from './services/data-fetching.service';

import { AppRoutingModule } from './app-routing.module';

import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { HeroesPageComponent } from './pages/heroes-page/heroes-page.component';
import { PowersPageComponent } from './pages/powers-page/powers-page.component';
import { AppComponent } from './app.component';

import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule
} from '@angular/material';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { InstanceDialogComponent } from './components/data-grid/instance-dialog/instance-dialog.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormFieldComponent } from './components/dynamic-form/dynamic-form-field/dynamic-form-field.component';
import { RelationFieldComponent } from './components/relation-field/relation-field.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesPageComponent,
    PowersPageComponent,
    DashboardPageComponent,
    PowersPageComponent,
    DataGridComponent,
    InstanceDialogComponent,
    DynamicFormComponent,
    DynamicFormFieldComponent,
    RelationFieldComponent
  ],
  entryComponents: [
    InstanceDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  providers: [
    DataFetchingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
