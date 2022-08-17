import { Component } from '@angular/core';
import { IStorage } from './core/services/Storage/IStorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pet-health-care';

  constructor(private StorageService: IStorage) {
    this.init();
  }

  async init() {
    // Await this.StorageService.update('Reha', { name: 'reha', surname: 'ok' });
  }
}
