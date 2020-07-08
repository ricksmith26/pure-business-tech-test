import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

	@Input() public showBtn: boolean;
	@Input() public text: string;

	constructor() { }

	ngOnInit(): void {
	}

}
