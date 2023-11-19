import { Component } from '@angular/core';
import { Comment } from 'src/app/model/comment';
import { Post } from 'src/app/model/post';
import { User } from 'src/app/model/user';
import { CommentService } from 'src/app/service/comment.service';
import { PostService } from 'src/app/service/post.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts: Post[] = []
  isCreating: boolean = false
  currentUser: User = JSON.parse(localStorage.getItem('currentUser') as string)
  today: Date = new Date()
  newPost?: Post = {
    id: 0,
    userId: this.currentUser.id,
    title: 'Titulo',
    content: 'Contenido',
    imageUrl: '',
    publicationDate: ` ${this.today.toISOString().slice(0,10)}, ${this.today.toISOString().slice(11,19)}`,
    comments: [],
    user: this.currentUser,
  }
  
  constructor(private postService: PostService, private commentService: CommentService, private userService: UserService) {
    this.getMyPosts()
  }

  getMyPosts(){
    let myId = JSON.parse(localStorage.getItem('currentUser') as string).id
    this.postService.getPostsByUserId(myId).subscribe(res => {
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
  clickNewPost(){
    this.isCreating = true
    console.log(this.isCreating)
  }
  cancel(){
    this.isCreating = false
  }
  createPost(post: Post){
    let now = new Date()
    this.newPost= {
      id: 0,
      userId: this.currentUser.id,
      title: post.title,
      content: post.content,
      imageUrl: post.imageUrl,
      publicationDate: new Date().toISOString(),
      // comments: [],
      // user: this.currentUser,
    }
    this.postService.createPost(this.newPost).subscribe(res=>{
      this.getMyPosts()
      this.newPost = {
        id: 0,
        userId: this.currentUser.id,
        title: 'Titulo',
        content: 'Contenido',
        imageUrl: '',
        publicationDate: ` ${this.today.toISOString().slice(0,10)} ${this.today.toISOString().slice(11,19)}`,
        comments: [],
        user: this.currentUser,
      }
      this.isCreating= false
    })
  }

  postComment(post: Post, commentContent: string){
    let comment: Comment = {
      "id": 0,
      "userId": JSON.parse(localStorage.getItem('currentUser') as string).userId,
      "content": commentContent,
      "publicationDate": new Date().toISOString(),
      "postId": post.id as number
    }
    this.commentService.createComment(comment).subscribe(res=>{
      this.getMyPosts()
    })
  }

  deletePost(post: Post){
    if (confirm(`Seguro que deseas eliminar este post?`)) {
      this.postService.deletePost(post.id as number).subscribe(()=>{
        this.getMyPosts()
      })
    }
  }

}
