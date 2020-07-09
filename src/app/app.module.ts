import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { ApiService } from './services/api.service';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		FormComponent,
		NavbarComponent,
		ButtonComponent,
		RadioButtonComponent,
		TextInputComponent,
		DatePickerComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		// ApiService
		// FormService
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
