import { Injectable } from '@angular/core';

export interface User {
  id: number;
  login: string;
  name: string;
  email: string;
}

const dbUsers: (User & {
  password: string;
})[] = [
  {
    id: 1,
    login: 'demo',
    name: 'demo',
    email: 'demo@spaceberry.ru',
    password: 'demo',
  },
];

const accessTokenName = 'accessToken';

// todo: Б - безопасность
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user?: User;

  constructor() {
    const accessToken = localStorage.getItem(accessTokenName);
    if (accessToken) {
      console.log('accessToken', accessToken);
      // this.user = JSON.parse(accessToken);
    }
  }

  login(login: string, password: string): User | null {
    const dbUser = dbUsers.find(
      (dbUser) => dbUser.login === login && dbUser.password === password
    );
    if (dbUser) {
      const { password, ...user } = dbUser;
      this.user = user;
      localStorage.setItem(accessTokenName, JSON.stringify(user));
      return user;
    }
    return null;
  }

  getCurrentUser() {
    return this.user;
  }

  logout() {
    localStorage.removeItem(accessTokenName);
    this.user = undefined;
  }
}
