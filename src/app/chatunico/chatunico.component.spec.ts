import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChatUnicoComponent } from './chatunico.component';

describe('ChatUnicoComponent', () => {
  let component: ChatUnicoComponent;
  let fixture: ComponentFixture<ChatUnicoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ChatUnicoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatUnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
