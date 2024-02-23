// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;

  // Usuário padrão para simplificar o exemplo
  private defaultUser = {
    username: 'admin@admin.com',
    password: 'admin',
  };

  login(username: string, password: string): boolean {
    if (username === this.defaultUser.username && password === this.defaultUser.password) {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}