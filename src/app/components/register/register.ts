import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth-service';
import { AllFormsModule } from '../../modules/all-forms-module/all-forms-module';

@Component({
  selector: 'app-register',
  imports: [AllFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  constructor(private authService: AuthService) {}
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    //chiamare auth service
    this.authService.register({ email: email, password: password }).subscribe((data) => {
      console.log(data);
    });
  }
}
