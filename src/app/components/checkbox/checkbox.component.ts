import { Input, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

	@Input() public options: string[];

	constructor() { }

	ngOnInit(): void {
	}

}
