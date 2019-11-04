import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotServiceComponent } from './chatbot-service.component';

describe('ChatbotServiceComponent', () => {
  let component: ChatbotServiceComponent;
  let fixture: ComponentFixture<ChatbotServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbotServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
