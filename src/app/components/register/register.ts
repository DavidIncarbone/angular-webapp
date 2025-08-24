import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AllFormsModule } from '../../modules/all-forms-module/all-forms-module';

@Component({
  selector: 'app-register',
  imports: [AllFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    //chiamare auth service
  }
}
