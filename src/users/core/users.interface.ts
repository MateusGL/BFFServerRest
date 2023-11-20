export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface CreateUserResponse {
  message: string;
}
