import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  private user?: User;

  login(login: string, password: string): Observable<User | null> {
    const dbUser = dbUsers.find(
      (dbUser) => dbUser.login === login && dbUser.password === password
    );
    if (dbUser) {
      const { password, ...user } = dbUser;
      this.user = user;
      return of(user);
    }
    return of(null);
  }

  getCurrentUser() {
    return this.user;
  }

  logout() {
    this.user = undefined;
  }
}
