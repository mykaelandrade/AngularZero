import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;

  login(username: string, password: string): boolean {
    // Lógica de autenticação (pode ser uma chamada a uma API, etc.)
    if (username === 'admin@admin.com' && password === 'admin') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}