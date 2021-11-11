import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [//Solo se agregan las Declaraciones, Componentes, Directivas y Pipes
    AppComponent,
  ],
  imports: [//Solo se importan otros modulos
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [//Nos permite utilizar cookies para el inicio de sesion mediante tokens con el comando:
    //npm install ngx-cookie-service --save de pagina https://www.npmjs.com/package/ngx-cookie-service

    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
