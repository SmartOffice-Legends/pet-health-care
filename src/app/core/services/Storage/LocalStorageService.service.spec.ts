/* Tslint:disable:no-unused-variable */

import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import { IStorage } from './IStorage';
import { LocalStorageService } from './LocalStorageService.service';

describe('Service: LocalStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService],
    });
  });

  it('Should set item', waitForAsync(inject([LocalStorageService], (object: IStorage) => {
    object.setItem('key', 'value').then((value) => {
      object.getItem('key').then((localStorageValue) => {
        expect(localStorage.getItem('key')).toBe(localStorageValue);
      });
      expect(value).toBe(true);
    });
  })));

  it('Should get item', waitForAsync(inject([LocalStorageService], (object: IStorage) => {
    object.getItem('key').then((value) => {
      expect(value).toBe('value');
    });
  })));

  it('Should remove item', waitForAsync(inject([LocalStorageService], (object: IStorage) => {
    object.removeItem('key').then((value) => {
      const localStorageInstance = new LocalStorageService();
      localStorageInstance.getItem('key').then((localStorageValue) => {
        expect(localStorageValue).toBe(null);
      });
      expect(value).toBe(true);
    });
  })));

  it('Should clear session storage', waitForAsync(inject([LocalStorageService], (object: IStorage) => {
    object.clear().then((value) => {
      expect(localStorage.length).toBe(0);
      expect(value).toBe(true);
    });
  })));
});
