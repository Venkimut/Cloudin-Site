import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsAndAzureComponent } from './aws-and-azure.component';

describe('AwsAndAzureComponent', () => {
  let component: AwsAndAzureComponent;
  let fixture: ComponentFixture<AwsAndAzureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsAndAzureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsAndAzureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
