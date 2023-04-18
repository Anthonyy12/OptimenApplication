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


  loginForm:FormGroup;
  
  constructor(
    private Log: FormBuilder,
    private router: Router,
    private LoginService: LoginService,
    private aRouter: ActivatedRoute

  ){
    this.loginForm =this.Log.group({
      email: ['',Validators.required],
      pass:  ['',Validators.required],
    });

  }
  ngOnInit(): void {
  
  }
  LOGIN(){
const LOG:Login={
  email:this.loginForm.get('email')?.value,
  password:this.loginForm.get('pass')?.value,
}
console.log(LOG);

  }
  GuardarNoticias() {
    const LOGIN: Login = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('pass')?.value,
    
    };
  
      console.log(LOGIN);
      this.LoginService.Login(LOGIN).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/listar-noticias']);
      });
   
  }

}
