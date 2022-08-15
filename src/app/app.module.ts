import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IStorage } from './core/services/Storage/IStorage';
import { IndexDBStorageService } from './core/services/Storage/IndexDBStorage.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => { return initializeApp(environment.firebase); }),
    provideAuth(() => { return getAuth(); }),
    provideDatabase(() => { return getDatabase(); }),
    provideFirestore(() => { return getFirestore(); }),
    provideStorage(() => { return getStorage(); }),
  ],
  providers: [{ provide: IStorage, useValue: IndexDBStorageService }],
  bootstrap: [AppComponent],
})
export class AppModule { }
