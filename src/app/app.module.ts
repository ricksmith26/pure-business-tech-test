import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
// import {FormService} from './services/form.service';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		FormComponent,
		TextInputComponent,
		NavbarComponent,
		ButtonComponent,
		CheckboxComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		// FormService
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
