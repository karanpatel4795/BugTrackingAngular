import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperHeaderComponent } from './developer-header.component';

describe('DeveloperHeaderComponent', () => {
  let component: DeveloperHeaderComponent;
  let fixture: ComponentFixture<DeveloperHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
