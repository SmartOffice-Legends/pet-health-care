import { Injectable } from '@angular/core';
import { IStorage } from './IStorage';

enum IDBTransactionModes {
  READ_ONLY = 'readonly',
  READ_WRITE = 'readwrite',
  VERSION_CHANGE = 'versionchange',

}

type TransactionItems = { db: IDBDatabase, tx: IDBTransaction, store: IDBObjectStore };

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
  public static DB_NAME: string = 'PET_HEALTH_CARE_DB';

  public static OBJECT_STORE_NAME: string = 'PET_HEALTH_CARE_STORE';

  // eslint-disable-next-line no-use-before-define
  private static instance: IndexDBStorageService;

  private idb?: IDBFactory;

  constructor() {
    super();
    if (IndexDBStorageService.instance) {
      // eslint-disable-next-line no-constructor-return
      return IndexDBStorageService.instance;
    }

    IndexDBStorageService.instance = this;

    // Check for support.
    if (!('indexedDB' in window)) {
      console.log("This browser doesn't support IndexedDB.");
    } else {
      (async () => {
        this.idb = window.indexedDB;
        await this.IDBFactory(window.indexedDB);
      })();
    }
  }

  /**
   * @param  {IDBFactory} idb
   */
  private async IDBFactory(idb: IDBFactory): Promise<void> {
    const dbConnection = await idb.open(IndexDBStorageService.DB_NAME, 1);
    dbConnection.onupgradeneeded = () => {
      const db = dbConnection.result;

      db.onerror = () => {
        console.log('Error loading database');
      };

      // Create an objectStore for this database
      db.createObjectStore(IndexDBStorageService.OBJECT_STORE_NAME); /* , {
        keyPath: 'id',
        autoIncrement: true,
      }); */
    };
  }

  private async getTransactionItems(txMethod: IDBTransactionMode): Promise<TransactionItems | null> {
    if (this.idb) {
      const dbOpenRequest = await this.idb.open(IndexDBStorageService.DB_NAME);
      const dbRequestResult = new Promise<TransactionItems | null>((resolve) => {
        dbOpenRequest.onsuccess = () => {
          const db = dbOpenRequest.result;
          const tx = db.transaction(IndexDBStorageService.OBJECT_STORE_NAME, txMethod);
          const store = tx.objectStore(IndexDBStorageService.OBJECT_STORE_NAME);
          resolve({ db, tx, store });
        };
        dbOpenRequest.onerror = () => {
          console.error('Error loading database');
          resolve(null);
        };
      });
      return dbRequestResult;
    }
    console.error('Can not access IDBFactory');
    return null;
  }

  async setItem(id: string, value: any): Promise<boolean> {
    const txItems = await this.getTransactionItems(IDBTransactionModes.READ_WRITE);
    const txItemsObject = txItems ? { ...txItems } : null;
    if (txItemsObject) {
      const { db, tx, store } = { ...txItemsObject };
      const putRequest = await store.add(value, id);
      putRequest.onerror = (error) => {
        console.error('Error setting item');
        console.error(error);
      };
      await tx.oncomplete;
      db.close();
      return true;
    }
    return false;
  }

  async clear(): Promise<boolean> {
    // Make a request to clear all the data out of the object store
    const txItems = await this.getTransactionItems(IDBTransactionModes.READ_WRITE);
    const txItemsObject = txItems ? { ...txItems } : null;
    if (txItemsObject) {
      const { db, tx, store } = { ...txItemsObject };
      const putRequest = await store.clear();
      putRequest.onerror = (error) => {
        console.error('Error removing all items');
        console.error(error);
      };
      await tx.oncomplete;
      db.close();
      return true;
    }
    return false;
  }

  async removeItem(key: string): Promise<boolean> {
    const txItems = await this.getTransactionItems(IDBTransactionModes.READ_WRITE);
    const txItemsObject = txItems ? { ...txItems } : null;
    if (txItemsObject) {
      const { db, tx, store } = { ...txItemsObject };
      const putRequest = await store.delete(key);
      putRequest.onerror = (error) => {
        console.error('Error deleting item');
        console.error(error);
      };
      await tx.oncomplete;
      db.close();
      return true;
    }
    return false;
  }

  async getItem(key: string): Promise<any> {
    const txItems = await this.getTransactionItems(IDBTransactionModes.READ_WRITE);
    const txItemsObject = txItems ? { ...txItems } : null;
    if (txItemsObject) {
      const { db, tx, store } = { ...txItemsObject };
      const getAllKeyRequest = await store.get(key);
      const value = new Promise<any>((resolve) => {
        getAllKeyRequest.onsuccess = (event) => {
          console.log((event.target as any).result);
          resolve((event.target as any).result);
        };
        getAllKeyRequest.onerror = (error) => {
          console.error('Error getting item');
          console.error(error);
          resolve(null);
        };
      });
      await tx.oncomplete;
      db.close();
      return value;
    }
    return null;
  }

  async getAllKeys(): Promise<any> {
    const txItems = await this.getTransactionItems(IDBTransactionModes.READ_WRITE);
    const txItemsObject = txItems ? { ...txItems } : null;
    if (txItemsObject) {
      const { db, tx, store } = { ...txItemsObject };
      const getAllKeyRequest = await store.getAllKeys();
      const value = new Promise<any>((resolve) => {
        getAllKeyRequest.onsuccess = (event) => {
          resolve((event.target as any).result);
        };
        getAllKeyRequest.onerror = (error) => {
          console.error('Error getting all keys');
          console.error(error);
          resolve(null);
        };
      });
      await tx.oncomplete;
      db.close();
      return value;
    }
    return null;
  }

  async getAllItems(): Promise<any | null> {
    const txItems = await this.getTransactionItems(IDBTransactionModes.READ_ONLY);
    const txItemsObject = txItems ? { ...txItems } : null;
    if (txItemsObject) {
      const { db, tx, store } = { ...txItemsObject };
      const getAllRequest = await store.getAll();
      const value = new Promise<any>((resolve) => {
        getAllRequest.onsuccess = ((event) => {
          resolve((event.target as any).result);
        });
        getAllRequest.onerror = ((error) => {
          console.error('Error getting all items');
          console.error(error);
          resolve(null);
        });
      });

      await tx.oncomplete;
      db.close();
      return value;
    }
    return null;
  }

  async updateItem(key: string, value: any): Promise<boolean> {
    const itemExists = await this.getItem(key);
    if (itemExists) {
      const txItems = await this.getTransactionItems(IDBTransactionModes.READ_WRITE);
      const txItemsObject = txItems ? { ...txItems } : null;
      if (txItemsObject) {
        const { db, tx, store } = { ...txItemsObject };
        const putRequest = await store.put(value, key);
        putRequest.onerror = (error) => {
          console.error('Error putting item');
          console.error(error);
        };
        await tx.oncomplete;
        db.close();
        return true;
      }
      return false;
    }
    return false;
  }
}
