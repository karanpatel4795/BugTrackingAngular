import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperListProjectsComponent } from './developer-list-projects.component';

describe('DeveloperListProjectsComponent', () => {
  let component: DeveloperListProjectsComponent;
  let fixture: ComponentFixture<DeveloperListProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperListProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperListProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
