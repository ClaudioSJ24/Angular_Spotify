import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  errorSession: boolean = false //variable bandera para verificar el inicio de session
  formLogin: FormGroup = new FormGroup({})

  constructor(private authService: AuthService, private cookieService: CookieService) { }

  ngOnInit(): void {
    //Validacion de formulario reactivo
    this.formLogin = new FormGroup(
      {
        email: new FormControl(
          '',
          [
            Validators.required,
            Validators.email
          ]
          ),
        password: new FormControl(
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(15)
          ]

          )

      }
    )
  }
  //Enviar datos de un formulario
  sendLogin(): void{
    const {email, password} = this.formLogin.value
    this.authService.sendCredentials(email, password)
    //Valido 200 < 400
    .subscribe( responseOk =>{//Cuando los datos de ususario son correctos
        console.log('Session iniciada de forma corresta')
        //Implementar una cookie desde el componente
        const { tokenSession, data } = responseOk
        //Obtener el valor de una cookie name: token, contenido de cookie: tokenSession, duracion: 4 dias.
        this.cookieService.set('token', tokenSession, 4, '/')

      },
      //No valido >= 400
      error =>{
        this.errorSession  = true
        console.log('Password o email incorrectos')

      }
    )
  }

}
