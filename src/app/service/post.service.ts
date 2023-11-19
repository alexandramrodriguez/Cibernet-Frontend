import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  basePath = "https://api-cibernet.azurewebsites.net/api/post"

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    let url = "/findAll"
    return this.httpClient.get<Post[]>(this.basePath+url)
  }
  getPostById(id: number): Observable<Post> {
    let url = `/findById/${id}`
    return this.httpClient.get<Post>(this.basePath+url)
  }
  getPostsByUserId(id: number): Observable<Post[]> {
    let url = `/findPostsByUserId/${id}`
    return this.httpClient.get<Post[]>(this.basePath+url)
  }
  createPost(post: Post): Observable<Post> {
    let url= "/create"
    return this.httpClient.post<Post>(this.basePath+url, post).pipe()
  }
  updatePost(post: Post): Observable<Post> {
    let url= `/update/${post.id}`
    return this.httpClient.put<Post>(this.basePath+url, post).pipe()
  }
  deletePost(id: number): Observable<any> {
    let url= `/delete/${id}`
    return this.httpClient.delete<any>(this.basePath+url).pipe()
  }
}