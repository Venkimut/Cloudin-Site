import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlAndNlComponent } from './ml-and-nl.component';

describe('MlAndNlComponent', () => {
  let component: MlAndNlComponent;
  let fixture: ComponentFixture<MlAndNlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlAndNlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlAndNlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
