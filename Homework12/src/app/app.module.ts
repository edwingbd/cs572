import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentCounterComponent } from './component-counter.component';
import { ComponentCounterFolderComponent } from './component-counter-folder/component-counter-folder.component';
import { ComponentCounterFolder2Component } from './component-counter-folder2/component-counter-folder2.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentCounterComponent,
    ComponentCounterFolderComponent,
    ComponentCounterFolder2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
