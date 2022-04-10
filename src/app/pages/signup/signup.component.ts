import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  showPassword: boolean = false;
  showEmail: boolean = false;


  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService:UserService) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', [Validators.required, Validators.minLength(8)]],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validators: this.matchPasswords.bind(this)
    });
  }

  ngOnInit(): void {
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  sendData() {
    if(this.form.valid) {
      const { password, confirm, username, email } = this.form.getRawValue();
      console.log('Enviar datos', password, confirm, username, email);
      const user = this.form.getRawValue();
      this.userService.postUsers({
        name: user.name,
        email: user.email,
        password: user.password
      }).subscribe(response => {
        console.log("response: ",response);
        this.router.navigate(['/login']);
      }, error => { if(error ['status']!=405) this.showEmail = true
    else this.showEmail = false});
    } else {
      console.log('no data', this.form);
    }
  }

  matchPasswords() {
    if(!this.form) return;
    const { password, confirm } = this.form.getRawValue();
    if(password === confirm) {
      return null;
    } else {
      return { passwordMismatch: true }
    }
  }

}
