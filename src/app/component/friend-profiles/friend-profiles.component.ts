// friend-profiles.component.ts

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-friend-profiles',
  templateUrl: './friend-profiles.component.html',
  styleUrls: ['./friend-profiles.component.css']
})
export class FriendProfilesComponent implements OnInit {
  friends: any[] = [];
  selectedUser: any = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.friends = users;
    });
  }

  viewProfile(friend: any): void {
    this.selectedUser = friend;
    console.log(`Navigating to profile for user ID: ${friend.id}`);
    this.router.navigate(['/profile', friend.id]);
  }
  
}
