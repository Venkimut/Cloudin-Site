import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppServiceComponent } from './mobile-app-service.component';

describe('MobileAppServiceComponent', () => {
  let component: MobileAppServiceComponent;
  let fixture: ComponentFixture<MobileAppServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileAppServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAppServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
