import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBugTaskComponent } from './list-bug-task.component';

describe('ListBugTaskComponent', () => {
  let component: ListBugTaskComponent;
  let fixture: ComponentFixture<ListBugTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBugTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBugTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
