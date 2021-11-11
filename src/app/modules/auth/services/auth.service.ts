import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = environment.api

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  sendCredentials(email: string, password: string): Observable<any> {
    const body = {//cuando los parametros son iguales no es necesario igualarlos (this.email = email)
      email,
      password
    }
    return this.httpClient.post(`${this.URL}/auth`, body)
    //Implementar una cookie desde el servicio
    /**
     * .pipe(
      tap((responseOk: any )=>{
        const { tokenSession, data } = responseOk
        //Obtener el valor de una cookie name: token, contenido de cookie: tokenSession, duracion: 4 dias.
        this.cookieService.set('token_servicio', tokenSession, 4, '/')
        }

      )
    )
     */
  }
}
