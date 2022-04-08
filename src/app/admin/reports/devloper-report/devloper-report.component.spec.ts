import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevloperReportComponent } from './devloper-report.component';

describe('DevloperReportComponent', () => {
  let component: DevloperReportComponent;
  let fixture: ComponentFixture<DevloperReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevloperReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevloperReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
