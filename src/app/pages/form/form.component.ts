import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';
import * as moment from 'moment';
import axios from 'axios';
const url = 'https://link.puretechnologysystems.com/ptsl-task/api/claimyour/new';
const smokeURl = 'https://link.puretechnologysystems.com/ptsl-task/api/claimyour/smoke';

enum Control {
	title = 'title',
	full_name = 'full_name',
	date_of_birth = 'date_of_birth',
	preferred_contact = 'prefered_contact',
	marital_status = 'marital_status',
	address_line_1 = 'address_line_1',
	address_line_2 = 'address_line_2',
	address_line_3 = 'address_line_3',
	post_code = 'post_code',
	current_address_confirmation = 'current_address_confirmation',
	joint_claim = 'joint_claim',
	lived_in_confirmation = 'lived_in_confirmation',
	pre_oct_2004 = 'pre_oct_2004',
	interest_only = 'interest_only',
	agree_tnc = 'agree_tnc'
}

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
	changeDetection: ChangeDetectionStrategy.Default
})
export class FormComponent implements OnInit {

	public control = Control;
	public remortgageForm: FormGroup;
	public errors: any;
	public errorPresent: boolean = false;

	constructor(
		private formBuilder: FormBuilder,
		private cdr: ChangeDetectorRef,
	) { }

	ngOnInit(): void {
		this.buildForm();
		setTimeout(() => {
			this.cdr.detectChanges();
			// axios.get(smokeURl);
		}, 300);

	}

	private buildForm(): void {
		this.remortgageForm = this.formBuilder.group({
			[this.control.title]: new FormControl('', [Validators.required]),
			[this.control.full_name]: new FormControl('', [Validators.required]),
			[this.control.date_of_birth]: new FormControl('', [Validators.required, this.checkDate]),
			[this.control.preferred_contact]: new FormControl('', [Validators.required]),
			[this.control.marital_status]: new FormControl('', [Validators.required]),
			[this.control.address_line_1]: new FormControl('', [Validators.required]),
			[this.control.address_line_2]: new FormControl('', [Validators.required]),
			[this.control.address_line_3]: new FormControl('', [Validators.required]),
			[this.control.post_code]: new FormControl('', [Validators.required]),
			[this.control.current_address_confirmation]: new FormControl('', [Validators.required]),
			[this.control.joint_claim]: new FormControl('', [Validators.required]),
			[this.control.lived_in_confirmation]: new FormControl('', [Validators.required]),
			[this.control.pre_oct_2004]: new FormControl('', [Validators.required, this.checkMortgageStart]),
			[this.control.interest_only]: new FormControl('', [Validators.required, this.checkInterestOnly]),
			[this.control.agree_tnc]: new FormControl('', [Validators.required, this.checkTnC]),
		});
	}

	public getData(): void {

		const errors = {
			title: this.getErrors(this.remortgageForm.get(Control.title)),
			full_name: this.getErrors(this.remortgageForm.get(Control.full_name)),
			date_of_birth: this.getErrors(this.remortgageForm.get(Control.date_of_birth)),
			preferred_contact: this.getErrors(this.remortgageForm.get(Control.preferred_contact)),
			marital_status: this.getErrors(this.remortgageForm.get(Control.marital_status)),
			address_line_1: this.getErrors(this.remortgageForm.get(Control.address_line_1)),
			address_line_2: this.getErrors(this.remortgageForm.get(Control.address_line_2)),
			address_line_3: this.getErrors(this.remortgageForm.get(Control.address_line_3)),
			post_code: this.getErrors(this.remortgageForm.get(Control.post_code)),
			current_address_confirmation: this.getErrors(this.remortgageForm.get(Control.current_address_confirmation)),
			joint_claim: this.getErrors(this.remortgageForm.get(Control.joint_claim)),
			lived_in_confirmation: this.getErrors(this.remortgageForm.get(Control.lived_in_confirmation)),
			pre_oct_2004: this.getErrors(this.remortgageForm.get(Control.pre_oct_2004)),
			interest_only: this.getErrors(this.remortgageForm.get(Control.interest_only)),
			agree_tnc: this.getErrors(this.remortgageForm.get(Control.agree_tnc)),
		};
		if (this.errorPresent) {
			this.errors = errors;
			return;
		}

		const body = {
			title: this.remortgageForm.get(Control.title).value,
			full_name: this.remortgageForm.get(Control.full_name).value,
			date_of_birth: this.remortgageForm.get(Control.date_of_birth).value,
			preferred_contact: this.remortgageForm.get(Control.preferred_contact).value,
			marital_status: this.remortgageForm.get(Control.marital_status).value,
			address_line_1: this.remortgageForm.get(Control.address_line_1).value,
			address_line_2: this.remortgageForm.get(Control.address_line_2).value,
			address_line_3: this.remortgageForm.get(Control.address_line_3).value,
			post_code: this.remortgageForm.get(Control.post_code).value,
			current_address_confirmation: this.remortgageForm.get(Control.current_address_confirmation).value,
			joint_claim: this.remortgageForm.get(Control.joint_claim).value,
			lived_in_confirmation: this.remortgageForm.get(Control.lived_in_confirmation).value,
			pre_oct_2004: this.remortgageForm.get(Control.pre_oct_2004).value,
			interest_only: this.remortgageForm.get(Control.interest_only).value,
			agree_tnc: this.remortgageForm.get(Control.agree_tnc).value,
		};
		this.submitForm(body);
	}

	public updateForm(event, control): void {
		this.remortgageForm.get(control).setValue(event);
	}

	public getErrorsMsg(name: string): string {
		if (this.errors[name] === undefined || this.errors[name] === null) { return null; }
		const msg = this.errors[name].reduce((acc, val) => {
			acc += (val.split('_').join(' ') + ', ');
			return acc;
		}, []);

		return msg;
	}

	public async submitForm(data: any) {
		const result = axios.post(url, data);
		return result;
	}

	private getErrors(control) {
		if (control.status === 'INVALID') {
			this.errorPresent = true;
			return Object.keys(control.errors);
		} else {
			return null;
		}
	}

	private checkDate(control: AbstractControl): { [key: string]: boolean } {
		let result: ValidationErrors = null;
		const maxAge = moment().subtract(74, 'years');
		const custAge = moment(control.value);
		moment(custAge).isBefore(maxAge) ? result = { applicant_must_be_under_75: true} : result = null;
		return result;
	}

	private checkInterestOnly(control: AbstractControl): { [key: string]: boolean } {
		let result: ValidationErrors = null;
		if (control.value === 'No') {
			result = { mortgage_must_interest_only: true};
			return result;
		} else {
			result = null;
			return result;
		}
	}

	private checkMortgageStart(control: AbstractControl): { [key: string]: boolean } {
		let result: ValidationErrors = null;
		if (control.value === 'Yes') {
			result = { mortgage_must_not_be_taken_out_before_2004: true };
			return result;
		} else {
			result = null;
			return result;
		}
	}

	private checkTnC(control: AbstractControl): { [key: string]: boolean } {
		let result: ValidationErrors = null;
		if (control.value === 'Yes') {
			result = null;
			return result;
		} else {
			result = { agree_to_terms_and_conditions: true };
			return result;
		}
	}
}
