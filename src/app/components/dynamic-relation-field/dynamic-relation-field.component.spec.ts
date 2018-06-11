import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRelationFieldComponent } from './dynamic-relation-field.component';

describe('DynamicRelationFieldComponent', () => {
  let component: DynamicRelationFieldComponent;
  let fixture: ComponentFixture<DynamicRelationFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicRelationFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicRelationFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
