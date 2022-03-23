import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjectTeamComponent } from './list-project-team.component';

describe('ListProjectTeamComponent', () => {
  let component: ListProjectTeamComponent;
  let fixture: ComponentFixture<ListProjectTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProjectTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProjectTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
