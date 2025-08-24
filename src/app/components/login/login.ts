import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AllFormsModule } from '../../modules/all-forms-module/all-forms-module';

@Component({
  selector: 'app-login',
  imports: [AllFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    //chiamare auth service
  }
}
