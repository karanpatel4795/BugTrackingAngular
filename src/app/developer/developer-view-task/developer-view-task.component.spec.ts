import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperViewTaskComponent } from './developer-view-task.component';

describe('DeveloperViewTaskComponent', () => {
  let component: DeveloperViewTaskComponent;
  let fixture: ComponentFixture<DeveloperViewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperViewTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperViewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
