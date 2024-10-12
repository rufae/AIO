import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaginaguardadosComponent } from './paginaguardados.component';

describe('PaginaguardadosComponent', () => {
  let component: PaginaguardadosComponent;
  let fixture: ComponentFixture<PaginaguardadosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PaginaguardadosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaguardadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
