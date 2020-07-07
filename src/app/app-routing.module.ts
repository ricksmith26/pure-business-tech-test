import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { AppComponent } from './app.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'form',
		component: FormComponent,
	},
];
@NgModule({
		imports: [RouterModule.forRoot(routes)],
		exports: [RouterModule]
	})
export class AppRoutingModule { }
