import { Component } from '@angular/core';
import { IndexDBStorageService } from './core/services/Storage/IndexDBStorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pet-health-care';

  constructor(private StorageService: IndexDBStorageService) {
  }

  init() {
    const storageService: IndexDBStorageService = this.StorageService();
  }
}
