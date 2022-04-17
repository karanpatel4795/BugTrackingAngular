import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterSlidebarComponent } from './tester-slidebar.component';

describe('TesterSlidebarComponent', () => {
  let component: TesterSlidebarComponent;
  let fixture: ComponentFixture<TesterSlidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesterSlidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterSlidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
