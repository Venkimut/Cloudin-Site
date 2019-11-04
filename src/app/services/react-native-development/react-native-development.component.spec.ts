import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactNativeDevelopmentComponent } from './react-native-development.component';

describe('ReactNativeDevelopmentComponent', () => {
  let component: ReactNativeDevelopmentComponent;
  let fixture: ComponentFixture<ReactNativeDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactNativeDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactNativeDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
