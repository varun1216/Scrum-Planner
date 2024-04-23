import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserScrumComponent } from './user-scrum.component';

describe('UserScrumComponent', () => {
  let component: UserScrumComponent;
  let fixture: ComponentFixture<UserScrumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserScrumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserScrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
