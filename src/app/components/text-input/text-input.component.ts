import { Component, OnInit, Input, forwardRef, Output, EventEmitter, Renderer2, ViewChild, ElementRef } from '@angular/core';

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const INPUT_FIELD_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => TextInputComponent),
	multi: true
};

@Component({
	selector: 'app-text-input',
	templateUrl: './text-input.component.html',
	styleUrls: ['./text-input.component.scss'],
	providers: [INPUT_FIELD_ACCESSOR]
})
export class TextInputComponent implements ControlValueAccessor {
	@Output() public iconClicked = new EventEmitter();
	@Input() public iconClass: string;
	@Input() public inputLabel: string;
	@Input() public error: string;
	@Input() public set required(value: boolean) {
		this.isRequired = value !== false;
	}
	@Input() public set iconWithCB(value: boolean) {
		this.isIconWithCB = value !== false;
	}
	@Input() public name: string;
	@Input() public placeholder = 'Type something';
	@Input() public set noErrorMsg(value: boolean) {
		this.showErrorMsg = value === false;
	}
	@Input() public type = 'Text';
	@Input() public autocomplete = 'on';
	@Input() public disabled = false;
	@Input() public maxLimit?: number;
	@ViewChild('textInput') private textInput: ElementRef;
	public showErrorMsg = true;
	public active = false;
	public isRequired = false;
	public isIconWithCB = false;
	public value: string = null;
	private propagateChange = (_: any) => { };

	constructor(
		private renderer: Renderer2
	) { }

	public onFocus() {
		this.active = true;
	}

	public onClickOutside() {
		this.active = false;
	}

	public onChange(event: any) {
		this.value = event.target.value;
		this.propagateChange(event.target.value);
	}

	public onIconClick() {
		this.iconClicked.emit();
	}

	// ControlValueAccessor methods
	public writeValue(value: string) {
		if (value) {
			this.value = value;
		} else {
			this.value = null;
		}
	}

	public setDisabledState(isDisabled: boolean) {
		this.renderer.setProperty(this.textInput.nativeElement, 'disabled', isDisabled);
		// disable other components here
	}

	public registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	public registerOnTouched() { }

} // InputFieldComponent

