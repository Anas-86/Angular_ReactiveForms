import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {
  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    cardNumber: new FormControl('',[
      Validators.required,
      Validators.minLength(20),   // card digits 16 + 4 hyphens = 20
      Validators.maxLength(20)    // card digits 16 + 4 hyphens = 20
    ]),
    expiration: new FormControl('',[
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    ]),
    securityCode: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3)
    ])
  });

  constructor(){
    console.log(this.cardForm.controls.name);
  }

  onSubmit(){
    console.log("form submitted");
  }
}
