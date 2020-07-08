import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { FormService } from 'src/app/services/form.service';

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
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

	public remortgageForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		// private formService: FormService
	) { }

	ngOnInit(): void {
		this.buildForm();
		// this.formService.init();

	}

	private buildForm(): void {
		this.remortgageForm = this.formBuilder.group({
			[Control.title]: new FormControl('', [Validators.required]),
			[Control.full_name]: new FormControl('', [Validators.required]),
			[Control.date_of_birth]: new FormControl('', [Validators.required]),
			[Control.preferred_contact]: new FormControl('', [Validators.required]),
			[Control.marital_status]: new FormControl('', [Validators.required]),
			[Control.address_line_1]: new FormControl('', [Validators.required]),
			[Control.address_line_2]: new FormControl('', [Validators.required]),
			[Control.address_line_3]: new FormControl('', [Validators.required]),
			[Control.post_code]: new FormControl('', [Validators.required]),
			[Control.current_address_confirmation]: new FormControl('', [Validators.required]),
			[Control.joint_claim]: new FormControl('', [Validators.required]),
			[Control.lived_in_confirmation]: new FormControl('', [Validators.required]),
			[Control.pre_oct_2004]: new FormControl('', [Validators.required]),
			[Control.interest_only]: new FormControl('', [Validators.required]),
			[Control.agree_tnc]: new FormControl('', [Validators.required]),
		});
	}

}
