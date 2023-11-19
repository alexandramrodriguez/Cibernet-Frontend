import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendPostComponent } from './friend-post.component';

describe('FriendPostComponent', () => {
  let component: FriendPostComponent;
  let fixture: ComponentFixture<FriendPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendPostComponent]
    });
    fixture = TestBed.createComponent(FriendPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
