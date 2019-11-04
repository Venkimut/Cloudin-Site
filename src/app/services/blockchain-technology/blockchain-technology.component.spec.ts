import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainTechnologyComponent } from './blockchain-technology.component';

describe('BlockchainTechnologyComponent', () => {
  let component: BlockchainTechnologyComponent;
  let fixture: ComponentFixture<BlockchainTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockchainTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
