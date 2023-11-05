import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 


@Component({
  selector: 'app-contact-us',
  templateUrl: './contactUs.component.html',
  styles:[
    `
    em{float:right; color:#E05C65; padding-left:10px}
    .error input , .error select , .error textarea {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder{color:#999;}
    .error ::-moz-placeholder{color:#999;}
    .error :-moz-placeholder{color:#999;}
    .error :-ms-input-placeholder{color:#999;}
    `
  ]

})
export class ContactUsComponent {
    constructor(private fb: FormBuilder) {}
    contactForm: FormGroup; // Define a FormGroup for the contact form
    submitSuccess: boolean = false; // Initially set to false
  ngOnInit() {
    // Initialize the form with validation rules
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }
    model: { name: string, email: string, message: string } = { name: '', email: '', message: '' };

  onSubmit() {
    if (this.contactForm.valid) {
        console.log('Form submitted:', this.model);
    }
    // Handle the form submission (e.g., send data to a server)
   

    this.submitSuccess = true;
    this.model = { name: '', email: '', message: '' };
  }
}
