import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors, FormArray } from '@angular/forms';

const url = 'https://link.puretechnologysystems.com/ptsl-task/api/claimyour/new'

import axios from 'axios';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(
		) { }
	

	public async submitForm(data: any) {
		const result = axios.post(url, data);
		return result;
	}
}