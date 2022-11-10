import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm!: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
        });
    }
    get f() { return this.forgotPasswordForm.controls; }

    onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.forgotPasswordForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgotPasswordForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.forgotPasswordForm.reset();
  }

}