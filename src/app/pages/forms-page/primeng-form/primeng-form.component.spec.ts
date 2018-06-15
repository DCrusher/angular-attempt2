import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengFormComponent } from './primeng-form.component';

describe('PrimengFormComponent', () => {
  let component: PrimengFormComponent;
  let fixture: ComponentFixture<PrimengFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
