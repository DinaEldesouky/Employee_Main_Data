import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterOtherComponent } from './master-other.component';

describe('MasterOtherComponent', () => {
  let component: MasterOtherComponent;
  let fixture: ComponentFixture<MasterOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterOtherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
