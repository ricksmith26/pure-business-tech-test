import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors, FormArray } from '@angular/forms';

export interface FormGroupErrors {
	[key: string]: {
		[key: string]: string
	};
}

export interface FormErrors {
	[k: string]: string;
}


@Injectable({
	providedIn: 'root'
})
export class FormService {

	private formErrors: FormErrors;
	private customValidationMessages: FormGroupErrors;
	private defaultErrMessages = {
		'required': 'Error: This field is required.'
	};

	constructor(
	) { }

	public init(validationMessages?: FormGroupErrors) {
		this.formErrors = {};
		if (validationMessages) {
			this.customValidationMessages = validationMessages;
		}
	}

	public getErrors(form: FormGroup) {
		let errors = {};
		

	}

	public checkFormValidationErrors(form: FormGroup, checkPristine?: boolean): FormErrors {
		this.formErrors = {};
		// There can be some form group level validators
		this.checkFormGroupErrors(form, checkPristine);
		// check controls for errors
		this.checkControlErrors(form, checkPristine);
		return { ...this.formErrors };
	}

	public getErrorMessage(errorType: ErrorType) {
		return this.defaultErrMessages[errorType];
	}

	private setErrors(key: string, errorName: string) {
		// check custom error messages first
		if (this.customValidationMessages && this.customValidationMessages[key] && this.customValidationMessages[key][errorName]) {
			const msg = this.customValidationMessages[key][errorName];

			this.formErrors[key] = msg as string;

			// else check default messages
		} else if (this.defaultErrMessages[errorName]) {
			const msg = this.defaultErrMessages[errorName];
			this.formErrors[key] = msg;
		}
	}

	private checkControlErrors(form: FormGroup, checkPristine?: boolean) {
		Object.keys(form.controls).forEach(key => {
			const control = form.controls[key];
			if (control instanceof FormGroup || control instanceof FormArray) {
				// that means control is another FormGroup, so call the function
				// recursively until we get our real controls
				this.checkControlErrors(control as FormGroup, checkPristine);
			} else {
				const controlErrors: ValidationErrors = control.errors;
				if (controlErrors !== null && (!control.pristine || checkPristine) && control.enabled) {
					Object.keys(controlErrors).forEach(errorName => {
						this.setErrors(key, errorName);
					});
				}
			}
		});
	}

	private checkFormGroupErrors(formGroup: FormGroup, checkPristine?: boolean) {
		const formGroupErrors: FormGroupErrors = formGroup.errors;
		if (formGroupErrors !== null && (!formGroup.pristine || checkPristine) && formGroup.enabled) {
			Object.keys(formGroupErrors).forEach(controlName => {
				Object.keys(formGroupErrors[controlName]).forEach(errorName => {
					this.setErrors(controlName, errorName);
				});
			});
		}
	}
}

export class PatternMessage {
	constructor(public pattern: string, public args: any[]) { }
}

export enum ErrorType {
	Default = 'default',
}
