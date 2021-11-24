import { Component } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form';
  dataForm: FormGroup;
  submitted = false;
  check = false;
  tab = 1;

  constructor(private formBuilder: FormBuilder) {
    this.dataForm = this.formBuilder.group({
      fname: formBuilder.control('', [Validators.required]),
      lname: formBuilder.control('', [Validators.required]),
      nim: formBuilder.control('', [Validators.required]),
      email: formBuilder.control('', [Validators.required, Validators.email]),
      password: formBuilder.control('', [Validators.required, Validators.minLength(8)]),
      cpassword: formBuilder.control('', [Validators.required])
    }, {
      validators: [this.checkPasswords]
    });
  }

  ngOnInit(): void {

  }

  private checkPasswords(control: AbstractControl): ValidationErrors | null {
    const pass = control.get('password')?.value;
    const cpass = control.get('cpassword')?.value;

    if (pass === cpass || cpass === '') {
      return null;
    }
    else {
      return { 'mustMatch': true };
    }
  }

  public control(name: string) {
    return this.dataForm.get(name);
  }

  public onSubmit() {
    this.submitted = true;
    if (this.dataForm.invalid) {
      alert('Input data error');
      return;
    } else {
      alert('Data has been set');
      localStorage.setItem('fname', this.control('fname').value);
      localStorage.setItem('lname', this.control('lname').value);
      localStorage.setItem('email', this.control('email').value);
      localStorage.setItem('nim', this.control('nim').value);
    }
  }
}
