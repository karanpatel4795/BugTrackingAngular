import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugFoundComponent } from './bug-found.component';

describe('BugFoundComponent', () => {
  let component: BugFoundComponent;
  let fixture: ComponentFixture<BugFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
