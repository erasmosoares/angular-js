import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { PasswordValidators } from './passwordValidators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form: FormGroup;

  constructor(fb:FormBuilder){
    this.form = fb.group({
      oldPassword: 
        ['', 
          Validators.required, 
          PasswordValidators.invalidOldPassword
        ],
      newPassword: 
        ['', 
          Validators.required
        ],
      confirmPassword: 
        ['', 
          Validators.required
        ]
    },
    {
      validator: PasswordValidators.passwordsShouldMatch
    }
    );
  }

  get oldPassword() { return this.form.get('oldPassword'); }
  get newPassword() { return this.form.get('newPassword'); }
  get confirmPassword() { return this.form.get('confirmPassword'); }

}
