import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapFormComponent } from './ng-bootstrap-form.component';

describe('NgBootstrapFormComponent', () => {
  let component: NgBootstrapFormComponent;
  let fixture: ComponentFixture<NgBootstrapFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
