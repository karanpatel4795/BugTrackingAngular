import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterListAllTaskComponent } from './tester-list-all-task.component';

describe('TesterListAllTaskComponent', () => {
  let component: TesterListAllTaskComponent;
  let fixture: ComponentFixture<TesterListAllTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesterListAllTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterListAllTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
