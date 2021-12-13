import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColleagesList } from './colleagues-list.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-mem-db';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 300,
      passThruUnknownUrl: true,
    }),
  ],
  declarations: [AppComponent, ColleagesList],
  bootstrap: [AppComponent],
})
export class AppModule {}
