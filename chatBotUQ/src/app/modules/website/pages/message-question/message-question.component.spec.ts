import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageQuestionComponent } from './message-question.component';

describe('MessageQuestionComponent', () => {
  let component: MessageQuestionComponent;
  let fixture: ComponentFixture<MessageQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
