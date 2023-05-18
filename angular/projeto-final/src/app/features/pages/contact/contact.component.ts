import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  formContato = this.fb.group({
    nome:["",[
      Validators.minLength(4),
      Validators.required
    ]],
    assunto: ["",[
      Validators.minLength(10),
      Validators.required
    ]],
    telefone:["",[
      Validators.minLength(11),
      Validators.required
    ]],
    email:["",[
      Validators.email,
      Validators.required
    ]],
    mensagem: ["", [
      Validators.minLength(20),
      Validators.required
    ]]
  })
  constructor(
    private fb: FormBuilder
  ){}

}
