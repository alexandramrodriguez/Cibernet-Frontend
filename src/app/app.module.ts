import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserComponent } from './component/user/user.component';
import { ProfileComponent } from './component/profile/profile.component';
import { PostComponent } from './component/post/post.component';
import { CommentComponent } from './component/comment/comment.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FeedComponent } from './component/feed/feed.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { FooterComponent } from './component/footer/footer.component';
import { FriendProfilesComponent } from './component/friend-profiles/friend-profiles.component';
import { FriendProfileDetailComponent } from './component/friend-profile-detail/friend-profile-detail.component';
import { FriendPostComponent } from './component/friend-post/friend-post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    UserComponent,
    ProfileComponent,
    PostComponent,
    CommentComponent,
    NavbarComponent,
    FeedComponent,
    SidebarComponent,
    FooterComponent,
    FriendProfilesComponent,
    FriendProfileDetailComponent,
    FriendPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'accounts/register', component: SignupComponent},
      {path: 'accounts/login', component: LoginComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'users', component: UserComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'myposts', component: PostComponent},
      {path: 'mycomments', component: CommentComponent},
      {path: 'friend-profiles', component: FriendProfilesComponent },
      { path: 'profile/:userId', component: FriendProfileDetailComponent },
      { path: 'posts/:userId', component: FriendPostComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
