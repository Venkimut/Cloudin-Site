import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RanddComponent } from './randd.component';

describe('RanddComponent', () => {
  let component: RanddComponent;
  let fixture: ComponentFixture<RanddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RanddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RanddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
