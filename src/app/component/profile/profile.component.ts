import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  currentUser: User = {}
  changePassword: boolean = false
  loginEventSubscription: Subscription = new Subscription()

  constructor(private userService: UserService, private router: Router){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') as string)
  }

  submit(user: User){
    user.id = this.currentUser.id
    user.username = this.currentUser.username
    if(this.changePassword){
      if(user.password != this.currentUser.password){
        alert("La password ingresada no es correcta")
        return
      }else{
        if(user.newPassword1 != user.newPassword2){
          alert("Las passwords no coinciden")
          return
        }
        if(user.newPassword1 == ''){
          alert("La password no puede estar vacia")
          return
        }
        user.password = user.newPassword1
      }
    }else{
      user.password = this.currentUser.password
    }
    console.log(user)
    this.userService.updateUser(user).subscribe(res=>{
      if(res.statusCode != 200){
        alert("Oops, ocurrio un error!!")
        return
      }
      localStorage.setItem('currentUser', JSON.stringify(res.data))
      this.currentUser = res.data
      alert("Se actualizo el perfil")
    })
  }
  deleteUser(){
    if (confirm(`Seguro que deseas eliminar tu perfil?`)) {
      this.userService.deleteUser(this.currentUser.id as number).subscribe(res=>{
        this.router.navigate(['/accounts/login'])
      })
    }
  }
}