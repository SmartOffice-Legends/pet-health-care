/* Tslint:disable:no-unused-variable */

import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import { IStorage } from './IStorage';
import { SessionStorageService } from './SessionStorageService.service';

describe('Service: SessionStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionStorageService],
    });
    const sessionStorageInstance = new SessionStorageService();
    sessionStorageInstance.setItem('key', 'value');
  });

  it('Should set item', waitForAsync(inject([SessionStorageService], (object: IStorage) => {
    object.setItem('key', 'value').then((value) => {
      object.getItem('key').then((sessionStorageValue) => {
        expect(sessionStorage.getItem('key')).toBe(sessionStorageValue);
      });
      expect(value).toBe(true);
    });
  })));

  it('Should get item', waitForAsync(inject([SessionStorageService], (object: IStorage) => {
    object.getItem('key').then((value) => {
      expect(value).toBe('value');
    });
  })));

  it('Should remove item', waitForAsync(inject([SessionStorageService], (object: IStorage) => {
    object.removeItem('key').then((value) => {
      const sessionStorageInstance = new SessionStorageService();
      sessionStorageInstance.getItem('key').then((sessionStorageValue) => {
        expect(sessionStorageValue).toBe(null);
      });
      expect(value).toBe(true);
    });
  })));

  it('Should clear session storage', waitForAsync(inject([SessionStorageService], (object: IStorage) => {
    object.clear().then((value) => {
      expect(sessionStorage.length).toBe(0);
      expect(value).toBe(true);
    });
  })));
});
