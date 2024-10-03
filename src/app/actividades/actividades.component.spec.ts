import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ActividadesComponent } from './actividades.component';

describe('ActividadesComponent', () => {
  let component: ActividadesComponent;
  let fixture: ComponentFixture<ActividadesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ActividadesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
