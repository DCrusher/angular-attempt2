import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AgGridModule } from 'ag-grid-angular';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import {
  DynamicFormsCoreModule,
  DynamicFormControlModel,
  DynamicFormControl,
  DynamicSelectModel,
  DYNAMIC_FORM_CONTROL_MAP_FN
} from '@ng-dynamic-forms/core';
import { DynamicFormsBasicUIModule } from '@ng-dynamic-forms/ui-basic';
import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';
import { DynamicFormsBootstrapUIModule } from '@ng-dynamic-forms/ui-bootstrap';
import { DynamicFormsFoundationUIModule } from '@ng-dynamic-forms/ui-foundation';
import { DynamicFormsKendoUIModule } from '@ng-dynamic-forms/ui-kendo';
import { DynamicFormsNGBootstrapUIModule } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { DynamicFormsPrimeNGUIModule } from '@ng-dynamic-forms/ui-primeng';

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
  MatAutocompleteModule,
  MatTabsModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule
} from '@angular/material';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { InstanceDialogComponent } from './components/data-grid/instance-dialog/instance-dialog.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { RelationFieldComponent } from './components/relation-field/relation-field.component';
import { DynamicRelationFieldComponent } from './components/dynamic-relation-field/dynamic-relation-field.component';
import { FormsPageComponent } from './pages/forms-page/forms-page.component';
import { MaterialFormComponent } from './pages/forms-page/material-form/material-form.component';
import { BootstrapFormComponent } from './pages/forms-page/bootstrap-form/bootstrap-form.component';
import { FoundationFormComponent } from './pages/forms-page/foundation-form/foundation-form.component';
import { KendoFormComponent } from './pages/forms-page/kendo-form/kendo-form.component';
import { CoreuiFormComponent } from './pages/forms-page/coreui-form/coreui-form.component';
import { NgBootstrapFormComponent } from './pages/forms-page/ng-bootstrap-form/ng-bootstrap-form.component';
import { PrimengFormComponent } from './pages/forms-page/primeng-form/primeng-form.component';
import { BasicFormComponent } from './pages/forms-page/basic-form/basic-form.component';

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
    DynamicRelationFieldComponent,
    FormsPageComponent,
    MaterialFormComponent,
    BootstrapFormComponent,
    FoundationFormComponent,
    KendoFormComponent,
    CoreuiFormComponent,
    NgBootstrapFormComponent,
    PrimengFormComponent,
    BasicFormComponent
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
    NgbDatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsBasicUIModule,
    DynamicFormsMaterialUIModule,
    DynamicFormsBootstrapUIModule,
    DynamicFormsFoundationUIModule,
    DynamicFormsKendoUIModule,
    DynamicFormsNGBootstrapUIModule,
    DynamicFormsPrimeNGUIModule,
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
    MatTabsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule
  ],
  providers: [
    DataFetchingService,
    // {
    //   provide: DYNAMIC_FORM_CONTROL_MAP_FN,
    //   useValue: (model: DynamicFormControlModel): Type<DynamicFormControl> | null  => {
    //     switch (model.constructor) {

    //       case DynamicSelectModel:
    //         return DynamicRelationFieldComponent;

    //       }
    //     }
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
