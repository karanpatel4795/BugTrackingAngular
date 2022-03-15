import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerSlidebarComponent } from './project-manager-slidebar.component';

describe('ProjectManagerSlidebarComponent', () => {
  let component: ProjectManagerSlidebarComponent;
  let fixture: ComponentFixture<ProjectManagerSlidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManagerSlidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectManagerSlidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
