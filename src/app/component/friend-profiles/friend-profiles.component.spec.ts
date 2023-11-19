import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendProfilesComponent } from './friend-profiles.component';

describe('FriendProfilesComponent', () => {
  let component: FriendProfilesComponent;
  let fixture: ComponentFixture<FriendProfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendProfilesComponent]
    });
    fixture = TestBed.createComponent(FriendProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
