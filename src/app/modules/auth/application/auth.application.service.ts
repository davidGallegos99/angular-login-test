import { inject, Injectable } from '@angular/core';
import { IAuthRepository } from '../domain/auth.repository';
import { AuthInfraestructureService } from '../infraestructure/auth.infraestructure.service';
import { IAuthRes, ILoginReq } from '../domain/auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthApplicationService {
  constructor() {}

  readonly repository = inject<IAuthRepository>(AuthInfraestructureService);

  signIn(data: ILoginReq): Observable<IAuthRes> {
    return this.repository.signIn(data);
  }
}
