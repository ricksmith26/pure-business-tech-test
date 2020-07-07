import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TextInputComponent } from '../components/text-input/text-input.component';

const FormRoutes: Routes = [
	{
		path: '',
		component: FormComponent,
	}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(FormRoutes),
		TextInputComponent

	],
	declarations: [
		FormComponent,
	],
	providers: [],
})
export class PagesModule { }
