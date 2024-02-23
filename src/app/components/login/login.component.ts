import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = 'admin@admin.com';
  password: string = 'admin';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      alert('Login bem-sucedido');
      this.router.navigate(['/home']);
    } else {
      // Lógica para lidar com falha no login
      alert('Credenciais inválidas. Tente novamente.');
    }
  }
}
