import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuOptions: any[] = []
  constructor(){
    this.menuOptions = [
      { icon: "fa fa-home", url: "dashboard", title: "Home"},
      { icon: "fa fa-rocket", url: "users", title: "Usuarios"},
      { icon: "fa-solid fa-bookmark", url: "myposts", title: "Mis Posts"},
      { icon: "fa-solid fa-comment-dots", url: "mycomments", title: "Mis Comentarios"},
      { icon: "fa fa-users", url: "friend-profiles", title: "Ver Perfil de Amigos"}
    ];
    
  }
}