import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private userService: UserService, private router: Router
    //, private formBuilder: FormBuilder
    ) {}

  createUser(userDTO: any){
    // validate Input
    const message = this.validateUser(userDTO);
    if(message.localeCompare("")!=0){
      alert(message)
      return;
    }    

    const user = userDTO
    user.imageUrl = "https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png"
    console.log(user)
    this.userService.createUser(user).subscribe(res => {
      if(res.statusCode == 201){
        this.router.navigate(['/accounts/login'])
        alert("Usuario creado correctamente")
      }else{
        alert(res.message)
      }
    })
  }

  validateUser(userDTO: any): string{
    if(userDTO.username.localeCompare('')== 0) return "El usuario no puede ser nulo"
    if(userDTO.password.localeCompare('')== 0) return "La contraseña no puede ser nula"
    if(userDTO.email.localeCompare('')== 0) return "El email es incorrecto"
    if(userDTO.password.localeCompare(userDTO.passwordConfirmation) != 0) return "Las contraseñas no coinciden"
    return ""
  }
}
