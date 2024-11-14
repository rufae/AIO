import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ActividadporgrupoComponent } from './actividadporgrupo.component';

describe('ActividadporgrupoComponent', () => {
  let component: ActividadporgrupoComponent;
  let fixture: ComponentFixture<ActividadporgrupoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ActividadporgrupoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActividadporgrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
