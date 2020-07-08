import { Component, OnInit, forwardRef, Input, Output, Provider, EventEmitter } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

// export const TEXT_INPUT_LIST_ACCESSOR: Provider = {
// 	provide: NG_VALUE_ACCESSOR,
// 	useExisting: forwardRef(() => TextInputComponent),
// 	multi: true
// };

@Component({
	selector: 'app-text-input',
	templateUrl: './text-input.component.html',
	styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
	@Input() public control: FormControl;

	private propagateChange = (_: any) => { };

	constructor() { }

	ngOnInit(): void {

	}

}


