import { Observable } from 'rxjs';
import { IAuthRes, ILoginReq } from './auth.model';

export interface IAuthRepository {
  signIn(data: ILoginReq): Observable<IAuthRes>;
}
