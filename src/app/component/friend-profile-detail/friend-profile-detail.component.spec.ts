import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendProfileDetailComponent } from './friend-profile-detail.component';

describe('FriendProfileDetailComponent', () => {
  let component: FriendProfileDetailComponent;
  let fixture: ComponentFixture<FriendProfileDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendProfileDetailComponent]
    });
    fixture = TestBed.createComponent(FriendProfileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
