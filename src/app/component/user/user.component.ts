import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: User[] = []
  filtro!: string;
  changePassword: boolean = false
  loginEventSubscription: Subscription = new Subscription()
  username: string = '';
  selectedUser: any = null;

  constructor(private userService: UserService, private router: Router){
    this.userService.getUsers().subscribe(res=>{
      this.users = res
    })
  }

  searchUser(): void {
    this.userService.searchUser(this.username).subscribe((res: any) => {
      this.users = res;
    });
  }
  getAll(){
    this.userService.getUsers().subscribe(res=>{
      this.users = res
    })
  }
  viewPosts(user: any): void {
    this.selectedUser = user;
    console.log(`Navigating to profile for user ID: ${user.id}`);
    this.router.navigate(['/posts', user.id]);
  }
}