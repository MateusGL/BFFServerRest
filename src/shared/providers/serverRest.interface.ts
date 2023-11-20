export namespace ServerRest {
  export interface CreateUserRequest {
    nome: string;
    email: string;
    password: string;
    administrador: 'true' | 'false';
  }

  export interface CreateUserResponse {
    message: string;
    _id: string;
  }

  export interface LoginRequest {
    email: string;
    password: string;
  }

  export interface LoginResponse {
    message: string;
    authorization: string;
  }
}
