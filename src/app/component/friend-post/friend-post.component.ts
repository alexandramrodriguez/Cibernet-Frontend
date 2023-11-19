import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/model/comment';
import { Post } from 'src/app/model/post';
import { User } from 'src/app/model/user';
import { CommentService } from 'src/app/service/comment.service';
import { PostService } from 'src/app/service/post.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-friend-post',
  templateUrl: './friend-post.component.html',
  styleUrls: ['./friend-post.component.css']
})
export class FriendPostComponent {
  posts: Post[] = []
  userId: number = 1
  
  constructor(private route: ActivatedRoute,private postService: PostService, private commentService: CommentService, private userService: UserService) {
  }

  ngOnInit(): void {
    // Obtener el ID del usuario de la URL
    const userId = this.route.snapshot.paramMap.get('userId');

    // Verificar si userId es null antes de llamar al servicio
    if (userId !== null) {
      // Convertir userId a número (o ajusta según el tipo que necesites)
      const userIdNumber = +userId;

      this.userId = userIdNumber
      // Obtener la información del usuario utilizando el servicio
      this.getAllPosts()
    }
  }
  getAllPosts(){
    this.postService.getPostsByUserId(this.userId).subscribe(res => {
      this.posts = res.sort((a, b) => b.publicationDate?.localeCompare(a.publicationDate as string) as number)
      this.posts.forEach(p => {
        this.userService.getUserById(p.user?.id as number).subscribe(res=>{
          p.user = res
        })
        this.commentService.getCommentsByPostId(p.id as number).subscribe(res=>{
          p.comments = res
          p.comments?.forEach(c=>{
            this.userService.getUserById(c.user?.id as number).subscribe(res=>{
              c.user=res
            })
          })
        })
      })
    })
  }

  postComment(post: Post, commentContent: string){
    let comment: Comment = {
      "id": 0,
      "userId": JSON.parse(localStorage.getItem('currentUser') as string).id,
      "content": commentContent,
      "publicationDate": new Date().toISOString(),
      "postId": post.id as number
    }
    const userId = this.route.snapshot.paramMap.get('userId');

    // Verificar si userId es null antes de llamar al servicio
    if (userId !== null) {
      // Convertir userId a número (o ajusta según el tipo que necesites)
      const userIdNumber = +userId;
    
    this.getAllPosts()
  }
}
}