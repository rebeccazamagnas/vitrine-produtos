// src/app/pages/checkout/checkout.page.ts
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, Validators, ReactiveFormsModule,
  FormGroup, FormControl
} from '@angular/forms';
import { NgIf, AsyncPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';

type CheckoutForm = FormGroup<{
  fullName: FormControl<string>;
  email: FormControl<string>;
  address: FormControl<string>;
}>;

@Component({
  standalone: true,
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, NgIf, AsyncPipe], // <-- adiciona AsyncPipe
  templateUrl: './checkout.page.html'
})
export class CheckoutPage implements OnInit {
  form!: CheckoutForm;

  constructor(private fb: FormBuilder, public cart: CartService) {}

  ngOnInit() {
    // usa nonNullable para os controles serem FormControl<string> (não string|null)
    this.form = this.fb.nonNullable.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email:    ['', [Validators.required, Validators.email]],
      address:  ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  get f() { return this.form.controls; }

  submit() {
    if (this.form.valid) {
      alert('Compra finalizada com sucesso!');
      this.cart.clear();
      this.form.reset();
    }
  }
}
