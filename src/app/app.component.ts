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
    this.init();
  }

  async init() {
    // Await this.StorageService.setItem('Reha', { name: 'reha' });
    console.log(await this.StorageService.getAllItems());
    // Await this.StorageService.removeItem('Reha');
    // Console.log(this.StorageService.getItem('Reha'));
    // This.StorageService.clear();
    // Console.log(this.StorageService.getAllKeys());
  }
}
