import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ResponseDto } from '../model/response-dto';
import { Comment } from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  
  basePath = "https://api-cibernet.azurewebsites.net/api/comment"

  constructor(private httpClient: HttpClient) { }

  getComments(): Observable<Comment[]> {
    let url = "/findAll"
    return this.httpClient.get<Comment[]>(this.basePath+url)
  }
  getPostById(id: number): Observable<Comment> {
    let url = `/findById/${id}`
    return this.httpClient.get<Comment>(this.basePath+url)
  }
  getCommentsByUserId(userId: number): Observable<any> {
    let url = `/findCommentsByUserId/${userId}`
    return this.httpClient.get<ResponseDto>(this.basePath+url).pipe(map(res=>res.data))
  }
  getCommentsByPostId(postId: number): Observable<any> {
    let url = `/findCommentsByPostId/${postId}`
    return this.httpClient.get<ResponseDto>(this.basePath+url).pipe(map(res=>res.data))
  }
  createComment(comment: Comment): Observable<Comment>{
    let url = "/create"
    return this.httpClient.post<Comment>(this.basePath+url,comment)
  }
  updateComment(comment: Comment): Observable<ResponseDto> {
    let url= `/update/${comment.id}`
    return this.httpClient.put<ResponseDto>(this.basePath+url, comment).pipe()
  }
  deleteComment(id: number): Observable<ResponseDto> {
    let url= `/delete/${id}`
    return this.httpClient.delete<ResponseDto>(this.basePath+url).pipe()
  }
}
