import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Userservice } from 'src/app/Services/userServices/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    submitted = false;
    constructor(private formBuilder: FormBuilder, private userService: Userservice,public route:Router) { }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]]
        });
    }

    onSubmit() {
        if (this.loginForm.valid) {
            console.log("valid data", this.loginForm.value);
            console.log("do api call");

            // do api calling
            let Data = {
                email: this.loginForm.value.email,
                password: this.loginForm.value.password
            }
            this.userService.login(Data).subscribe((res: any) => {
                console.log('Login successful', res);
                console.log(Data);
                localStorage.setItem('token',res.data)
                this.route.navigate(['dashboard']);

            })
        }
        else {
            console.log('invalid data', this.loginForm.value);
            console.log('no api call');
        }




    }

    onReset() {
        this.submitted = false;
        this.loginForm.reset();
    }

}