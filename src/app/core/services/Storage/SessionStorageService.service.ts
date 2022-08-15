import { Injectable } from '@angular/core';
import { IStorage } from './IStorage';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService extends IStorage {
  setItem(key: string, value: string): Promise<boolean> {
    return new Promise((resolve) => {
      sessionStorage.setItem(key, value);
      resolve(true);
    });
  }

  getItem(key: string): Promise<string | null> {
    return new Promise((resolve) => {
      resolve(sessionStorage.getItem(key));
    });
  }

  removeItem(key: string): Promise<boolean> {
    return new Promise((resolve) => {
      sessionStorage.removeItem(key);
      resolve(true);
    });
  }

  clear(): Promise<boolean> {
    return new Promise((resolve) => {
      sessionStorage.clear();
      resolve(true);
    });
  }
}
