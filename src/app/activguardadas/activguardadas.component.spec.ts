import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ActivguardadasComponent } from './activguardadas.component';

describe('ActivguardadasComponent', () => {
  let component: ActivguardadasComponent;
  let fixture: ComponentFixture<ActivguardadasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ActivguardadasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActivguardadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
