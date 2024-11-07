import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrearItinerarioComponent } from './crearitinerario.component';

describe('CrearitinearioComponent', () => {
  let component: CrearItinerarioComponent;
  let fixture: ComponentFixture<CrearItinerarioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CrearItinerarioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearItinerarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
