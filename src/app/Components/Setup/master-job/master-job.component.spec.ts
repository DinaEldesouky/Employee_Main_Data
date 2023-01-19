import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterJobComponent } from './master-job.component';

describe('MasterJobComponent', () => {
  let component: MasterJobComponent;
  let fixture: ComponentFixture<MasterJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
