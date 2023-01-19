import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterFinancialComponent } from './master-financial.component';

describe('MasterFinancialComponent', () => {
  let component: MasterFinancialComponent;
  let fixture: ComponentFixture<MasterFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterFinancialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
