import { Injectable } from '@angular/core';
import { IStorage } from './IStorage';

@Injectable({
  providedIn: 'root',
})
export class IndexDBStorageService extends IStorage {
/*
  All data operations in IndexedDB are carried out inside a transaction.
  Each operation has this form:
  1. Get database object
  2. Open transaction on database
  3. Open object store on transaction
  4. Perform operation on object store
*/
  // eslint-disable-next-line no-use-before-define
  private static instance: IndexDBStorageService;

  private static DB_NAME: string = 'PET_HEALTH_CARE_DB';

  constructor() {
    super();
    if (IndexDBStorageService.instance) {
      // eslint-disable-next-line no-constructor-return
      return IndexDBStorageService.instance;
    }

    // Check for support.
    if (!('indexedDB' in window)) {
      console.log("This browser doesn't support IndexedDB.");
      // eslint-disable-next-line consistent-return
      return;
    }
    this.IDBFactory(window.indexedDB);
    IndexDBStorageService.instance = this;
  }

  async IDBFactory(idb: IDBFactory): Promise<IDBOpenDBRequest> {
    const db = await idb.open(IndexDBStorageService.DB_NAME, 1);
    console.log(db);
    return db;
  }

  setItem(key: string, value: string): Promise<boolean> {
    return new Promise((resolve) => {
      console.log(key, value);
      resolve(true);
    });
  }

  getItem(key: string): Promise<string | null> {
    return new Promise((resolve) => {
      console.log(key);
      resolve('');
    });
  }

  removeItem(key: string): Promise<boolean> {
    return new Promise((resolve) => {
      console.log(key);
      resolve(true);
    });
  }

  clear(): Promise<boolean> {
    return new Promise((resolve) => {
      console.log('hi');
      resolve(true);
    });
  }
}
