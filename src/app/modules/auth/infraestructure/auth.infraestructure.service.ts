import { inject, Injectable } from '@angular/core';
import { IAuthRepository } from '../domain/auth.repository';
import { map, Observable } from 'rxjs';
import { IAuthRes, ILoginReq } from '../domain/auth.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthInfraestructureService implements IAuthRepository {
  http = inject(HttpClient);

  signIn(data: ILoginReq): Observable<IAuthRes> {
    return this.http
      .post<IAuthRes>('https://jsonplaceholder.typicode.com/todos/1', data)
      .pipe(
        map((re) => {
          return {
            ok: true,
            token: 'JASDIUQW(!*@#!@(*&#WHDQIUHIQWHDIWQ',
            user: {
              name: 'jaramillo',
            },
          };
        })
      );
  }
}
