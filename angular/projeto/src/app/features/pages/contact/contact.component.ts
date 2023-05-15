import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  formContato = this.fb.group({
    name: ['', [Validators.minLength, Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    message: ['', [Validators.minLength, Validators.required]],
  });
  constructor(private fb: FormBuilder) {}

}
