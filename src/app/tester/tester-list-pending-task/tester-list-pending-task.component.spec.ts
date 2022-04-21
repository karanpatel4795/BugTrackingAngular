import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterListPendingTaskComponent } from './tester-list-pending-task.component';

describe('TesterListPendingTaskComponent', () => {
  let component: TesterListPendingTaskComponent;
  let fixture: ComponentFixture<TesterListPendingTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesterListPendingTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterListPendingTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
