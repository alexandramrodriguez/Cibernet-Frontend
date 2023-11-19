// friend-profile-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-friend-profile-detail',
  templateUrl: './friend-profile-detail.component.html',
  styleUrls: ['./friend-profile-detail.component.css']
})
export class FriendProfileDetailComponent implements OnInit {
  selectedUser: any = null;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    // Obtener el ID del usuario de la URL
    const userId = this.route.snapshot.paramMap.get('userId');

    // Verificar si userId es null antes de llamar al servicio
    if (userId !== null) {
      // Convertir userId a número (o ajusta según el tipo que necesites)
      const userIdNumber = +userId;

      // Obtener la información del usuario utilizando el servicio
      this.userService.getUserById(userIdNumber).subscribe((user) => {
        this.selectedUser = user;
      });
    }
  }
}
