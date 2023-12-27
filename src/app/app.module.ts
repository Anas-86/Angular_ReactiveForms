import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from './card-form/card-form.component';
import { InputComponent } from './input/input.component';
import { FormatCardNumberDirective } from './format-card-number.directive';
import { FormatExpirationDateDirective } from './format-expiration-date.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardFormComponent,
    InputComponent,
    FormatCardNumberDirective,
    FormatExpirationDateDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
