import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Input() btnText!: string;

  momentForm!: FormGroup;

  formContato = this.fb.group({
    name:["",[
      Validators.minLength,
      Validators.required
    ]],

    email:["",[
      Validators.email,
      Validators.required
    ]],
    message:["",[
      Validators.minLength,
      Validators.required
    ]]
  })
  constructor(
    private fb: FormBuilder
  ){}
  ngOnInit(): void {

  }
  submit(){
    console.log('Enviou formulário')
  }

}
