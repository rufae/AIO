import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProponerActividadComponent } from './proponer-actividad.component';

describe('ProponerActividadComponent', () => {
  let component: ProponerActividadComponent;
  let fixture: ComponentFixture<ProponerActividadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ProponerActividadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProponerActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
