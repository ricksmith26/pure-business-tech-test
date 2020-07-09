import { Component, Provider, Input, forwardRef, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const RADIO_BUTTON_LIST_ACCESSOR: Provider = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => RadioButtonComponent),
	multi: true
};

@Component({
	selector: 'app-radio-button',
	templateUrl: './radio-button.component.html',
	styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
	@Input() public options: string[];
	@Input() public control: FormControl;
	@Output() buttonEmitter = new EventEmitter();
	public selected: string;

	private propagateChange = (_: any) => { };


	constructor() { }

	ngOnInit(): void {
	}

	public onChange(val: string): void {
		this.selected = val;
		this.updatePrintedName(this.selected);
	}

	public updatePrintedName(nameVal): void {
		this.buttonEmitter.emit(nameVal);
	}

	private emitChanges(): void {
		this.onChange(this.selected);
	}

	private writeValue(val: string): void {
		this.selected = val;
	}

	private registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	private registerOnTouched(fn: any): void { }

	private setDisabledState?(): void {

	}

}
