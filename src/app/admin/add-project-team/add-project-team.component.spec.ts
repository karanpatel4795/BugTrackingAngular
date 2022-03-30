import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectTeamComponent } from './add-project-team.component';

describe('AddProjectTeamComponent', () => {
  let component: AddProjectTeamComponent;
  let fixture: ComponentFixture<AddProjectTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
