import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ResponseDto } from '../model/response-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  basePath = "https://api-cibernet.azurewebsites.net/api/user"
  currentUser: User = {} 

  constructor(private httpClient: HttpClient) { }
  
  getUsers(): Observable<User[]> {
    let url = "/findAll"
    return this.httpClient.get<User[]>(this.basePath+url)
  }
  getUserById(id: number): Observable<User> {
    let url = `/findById/${id}`
    return this.httpClient.get<User>(this.basePath+url)
  }
  login(user: User){
    let url= "/login"
    return this.httpClient.post<ResponseDto>(this.basePath+url, user).pipe()
  }
  createUser(user: User): Observable<ResponseDto> {
    let url= "/create"
    return this.httpClient.post<ResponseDto>(this.basePath+url, user).pipe()
  }  
  updateUser(user: User): Observable<ResponseDto> {
    let url= `/update/${user.id}`
    return this.httpClient.put<ResponseDto>(this.basePath+url, user).pipe()
  }
  deleteUser(id: number): Observable<ResponseDto> {
    let url= `/delete/${id}`
    return this.httpClient.delete<ResponseDto>(this.basePath+url).pipe()
  }
  searchUser(username: string): Observable<ResponseDto> {
    let url= `/search/${username}`
    return this.httpClient.get<ResponseDto>(this.basePath+url).pipe(map(res=>res.data))
  }
}
