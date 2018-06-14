import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationFormComponent } from './foundation-form.component';

describe('FoundationFormComponent', () => {
  let component: FoundationFormComponent;
  let fixture: ComponentFixture<FoundationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
