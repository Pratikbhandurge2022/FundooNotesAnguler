import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Userservice } from 'src/app/Services/userServices/user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
    resetPasswordForm!: FormGroup;
    submitted = false;
    token: any;

    constructor(private formBuilder: FormBuilder, private userService: Userservice, private router: Router, private activeRoute: ActivatedRoute) { }
    ngOnInit() {
        this.resetPasswordForm = this.formBuilder.group({
            password: ['', [Validators.required, Validators.minLength(4)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(4)]]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.resetPasswordForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.resetPasswordForm.valid) {
            let Data = {
                password: this.resetPasswordForm.value.password,
                confirmPassword: this.resetPasswordForm.value.confirmPassword
            }   
            // console.log('valid data', this.resetPasswordForm.value);
            // console.log('do api call');

            // do api calling
            // let Data = {
            //     password: this.resetPasswordForm.value.password,
            //     confirmPassword: this.resetPasswordForm.value.confirmPassword
            // }
             console.log(Data)

            this.userService.resetPassword(Data,this.token).subscribe((response: any) => {
                console.log('Password changed successfully', response);

            })
        }
        else {
            console.log('invalid data', this.resetPasswordForm.value);
            console.log('no api call');
        }

    }
    
    

    onReset() {
        this.submitted = false;
        this.resetPasswordForm.reset();
    }
}