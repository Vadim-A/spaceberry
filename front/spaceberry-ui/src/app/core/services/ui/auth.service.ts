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

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(login: string, password: string): User | null {
    const dbUser = dbUsers.find(
      (dbUser) => dbUser.login === login && dbUser.password === password
    );
    if (dbUser) {
      const { password, ...user } = dbUser;
      localStorage.setItem(accessTokenName, JSON.stringify(user));
      return user;
    }
    return null;
  }

  getCurrentUser() {
    const accessToken = localStorage.getItem(accessTokenName);
    if (accessToken) {
      return JSON.parse(accessToken);
    }
    return;
  }

  logout() {
    localStorage.removeItem(accessTokenName);
  }
}
