import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowersPageComponent } from './powers-page.component';

describe('PowersPageComponent', () => {
  let component: PowersPageComponent;
  let fixture: ComponentFixture<PowersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
