import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users: User[] = []
  currentUser: User = {}
  userService: UserService

  constructor(private service: UserService, private router: Router) {
    this.userService = service
  }

  getUsers(){
    this.userService.getUsers().subscribe(res=> alert(JSON.stringify(res)))
  }
  login(loginDTO: any){
    this.userService.login(loginDTO).subscribe(res=> {
      if(res.statusCode == 200){
        localStorage.setItem('currentUser', JSON.stringify(res.data))
        this.router.navigate(['/dashboard'],{queryParams:{ id: res.data.userId }})
      }
      else{
        alert(res.message)
        return
      }
    })
  }
}
