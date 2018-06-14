import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoFormComponent } from './kendo-form.component';

describe('KendoFormComponent', () => {
  let component: KendoFormComponent;
  let fixture: ComponentFixture<KendoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
