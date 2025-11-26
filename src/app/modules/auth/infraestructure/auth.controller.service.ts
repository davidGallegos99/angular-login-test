import { inject, Injectable } from '@angular/core';
import { AuthApplicationService } from '../application/auth.application.service';
import { IAuthRes, ILoginReq } from '../domain/auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthControllerService {
  application = inject(AuthApplicationService);

  constructor() {}

  signIn(data: ILoginReq): Observable<IAuthRes> {
    return this.application.signIn(data);
  }
}
