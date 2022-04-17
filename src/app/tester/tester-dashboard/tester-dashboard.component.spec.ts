import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterDashboardComponent } from './tester-dashboard.component';

describe('TesterDashboardComponent', () => {
  let component: TesterDashboardComponent;
  let fixture: ComponentFixture<TesterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesterDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
