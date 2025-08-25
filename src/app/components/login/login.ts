import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth-service';
import { AllFormsModule } from '../../modules/all-forms-module/all-forms-module';

@Component({
  selector: 'app-login',
  imports: [AllFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    console.log(this.authService.isLoggedIn);
  }
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    //chiamare auth service
    this.authService.login(email, password).subscribe({
      next: (data: any) => {
        console.log(data);
        const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);
        this.authService.createUser(data.email, data.localId, data.idToken, expirationDate);
        console.log(this.authService.user);
        localStorage.setItem('user', JSON.stringify(this.authService.user));
      },
      error: (err) => {
        console.error(err);
        return;
      },
    });
  }
}
