import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugAssignComponent } from './bug-assign.component';

describe('BugAssignComponent', () => {
  let component: BugAssignComponent;
  let fixture: ComponentFixture<BugAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugAssignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
