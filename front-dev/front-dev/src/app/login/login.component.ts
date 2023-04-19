import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/modelos/Login';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  constructor(private formBuilder: FormBuilder,
    private router: Router,
              private HacerloginService:LoginService
    ) {}


  ngOnInit(): void {
  
  }
  onSubmit() {
    if (this.loginForm.valid && this.loginForm.value.email?.endsWith('@optimen.com')) {
    this.HacerLogin();
   
    } else {
      // mostrar mensaje de error
      this.loginForm.controls.email.setErrors({ invalidEmail: true });
    }
  }

  
  HacerLogin() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
  
    if (email && password) {
      const LOGIN: Login = {
        email: email,
        password: password,
     
      };
  
      this.HacerloginService.Login(LOGIN).subscribe(respuesta => {
        // hacer algo con la respuesta del servicio
        console.log(respuesta);
        console.log(LOGIN);
      this.HacerloginService.setIsLoggedIn(true);  
        this.router.navigate(['/nav']);
      });
    }
  }
  



}
