export interface ILoginReq {
  email: string;
  password: string;
}

export interface IAuthRes {
  token: string;
  ok: boolean;
  user: Record<string, unknown>;
}
