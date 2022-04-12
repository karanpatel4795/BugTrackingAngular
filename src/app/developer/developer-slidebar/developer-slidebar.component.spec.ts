import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperSlidebarComponent } from './developer-slidebar.component';

describe('DeveloperSlidebarComponent', () => {
  let component: DeveloperSlidebarComponent;
  let fixture: ComponentFixture<DeveloperSlidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperSlidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperSlidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
