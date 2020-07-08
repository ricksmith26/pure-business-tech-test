import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	public Window = window;
	constructor(private router: Router) {
		router.events.subscribe((val) => {
			this.Window = window;
		});
	}
}