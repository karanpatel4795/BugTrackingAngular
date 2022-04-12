import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesReportComponent } from './modules-report.component';

describe('ModulesReportComponent', () => {
  let component: ModulesReportComponent;
  let fixture: ComponentFixture<ModulesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulesReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
