export interface User {
  id: number;
  token: string;
  name: {
    first: string,
    last: string
  };
  login: string;
  password: string;
}


export interface UserLogin {
  token: string;
}
