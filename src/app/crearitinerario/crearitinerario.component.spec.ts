import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrearitinearioComponent } from './crearitinerario.component';

describe('CrearitinearioComponent', () => {
  let component: CrearitinearioComponent;
  let fixture: ComponentFixture<CrearitinearioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CrearitinearioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearitinearioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
