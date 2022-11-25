import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService {

  constructor() { }
  IsLoggedIn(){
    return !!localStorage.getItem('token');
  }
  
}
