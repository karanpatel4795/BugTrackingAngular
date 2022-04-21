import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterListAllBugsComponent } from './tester-list-all-bugs.component';

describe('TesterListAllBugsComponent', () => {
  let component: TesterListAllBugsComponent;
  let fixture: ComponentFixture<TesterListAllBugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesterListAllBugsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterListAllBugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
