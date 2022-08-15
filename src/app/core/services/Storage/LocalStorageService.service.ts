import { Injectable } from '@angular/core';
import { IStorage } from './IStorage';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService extends IStorage {
  setItem(key: string, value: string): Promise<boolean> {
    return new Promise((resolve) => {
      localStorage.setItem(key, value);
      resolve(true);
    });
  }

  getItem(key: string): Promise<string | null> {
    return new Promise((resolve) => {
      resolve(localStorage.getItem(key));
    });
  }

  removeItem(key: string): Promise<boolean> {
    return new Promise((resolve) => {
      localStorage.removeItem(key);
      resolve(true);
    });
  }

  clear(): Promise<boolean> {
    return new Promise((resolve) => {
      localStorage.clear();
      resolve(true);
    });
  }
}
