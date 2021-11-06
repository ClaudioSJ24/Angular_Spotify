import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({})

  constructor() { }

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
    const datos = this.formLogin.value
  }

}
