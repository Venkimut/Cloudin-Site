import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtificialIntellienceComponent } from './artificial-intellience.component';

describe('ArtificialIntellienceComponent', () => {
  let component: ArtificialIntellienceComponent;
  let fixture: ComponentFixture<ArtificialIntellienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtificialIntellienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtificialIntellienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
