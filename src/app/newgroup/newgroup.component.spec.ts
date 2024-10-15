import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewgroupComponent } from './newgroup.component';

describe('NewgroupComponent', () => {
  let component: NewgroupComponent;
  let fixture: ComponentFixture<NewgroupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NewgroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
