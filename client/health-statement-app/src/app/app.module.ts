import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignatureFormComponent } from './components/signature-form/signature-form.component';
import { MainFormComponent } from './components/main-form/main-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignatureFormComponent,
    MainFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
