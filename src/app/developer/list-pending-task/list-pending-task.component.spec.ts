import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPendingTaskComponent } from './list-pending-task.component';

describe('ListPendingTaskComponent', () => {
  let component: ListPendingTaskComponent;
  let fixture: ComponentFixture<ListPendingTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPendingTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPendingTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
