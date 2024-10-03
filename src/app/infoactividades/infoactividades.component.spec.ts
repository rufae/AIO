import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InfoactividadesComponent } from './infoactividades.component';

describe('InfoactividadesComponent', () => {
  let component: InfoactividadesComponent;
  let fixture: ComponentFixture<InfoactividadesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [InfoactividadesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoactividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
