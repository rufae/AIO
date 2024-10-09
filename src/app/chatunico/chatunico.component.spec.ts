import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChatunicoComponent } from './chatunico.component';

describe('ChatunicoComponent', () => {
  let component: ChatunicoComponent;
  let fixture: ComponentFixture<ChatunicoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ChatunicoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatunicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
