import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AgGridModule } from 'ag-grid-angular';
import { DynamicFormsCoreModule, DynamicFormControlModel, DynamicFormControl, DYNAMIC_FORM_CONTROL_MAP_FN } from '@ng-dynamic-forms/core';
import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';

import {
  DynamicSelectModel,
} from '@ng-dynamic-forms/core';

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
  MatFormFieldModule,
  MatAutocompleteModule
} from '@angular/material';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { InstanceDialogComponent } from './components/data-grid/instance-dialog/instance-dialog.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { RelationFieldComponent } from './components/relation-field/relation-field.component';
import { DynamicRelationFieldComponent } from './components/dynamic-relation-field/dynamic-relation-field.component';

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
    RelationFieldComponent,
    DynamicRelationFieldComponent
  ],
  entryComponents: [
    InstanceDialogComponent,
    DynamicRelationFieldComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsMaterialUIModule,
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
    MatAutocompleteModule,
  ],
  providers: [
    DataFetchingService,
    {
      provide: DYNAMIC_FORM_CONTROL_MAP_FN,
      useValue: (model: DynamicFormControlModel): Type<DynamicFormControl> | null  => {
        switch (model.constructor) {

          case DynamicSelectModel:
            return DynamicRelationFieldComponent;

          }
        }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
