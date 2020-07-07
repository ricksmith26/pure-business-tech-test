import { Component, OnInit, Input } from '@angular/core';

// import homeLogo from '../../../assets/icons/claim.png';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	@Input() public img: string;
	@Input() public imgHeight: string;
	@Input() public showBtn: boolean;

	constructor() { }

	ngOnInit(): void {
		console.log(this.imgHeight, '<<<<')
	}

}
