import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SubmitCreateOrderForm } from '../../../service/form';
@Component({
  selector: 'app-submit-order',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './submit-order.component.html',
  styleUrl: './submit-order.component.css',
})
export class SubmitOrderComponent implements SubmitCreateOrderForm {
  fullName: string = '';
  phoneNumber: string = '';
  address: string = '';
  note: string = '';
  email: string = '';

  handleFullNameChange(value: string) {
    this.fullName = value;
    console.log('Full name changed to:', this.fullName);
  }

  handlePhoneNumberChange(value: string) {
    this.phoneNumber = value;
    console.log('Phone number changed to:', this.phoneNumber);
  }

  handleAddressChange(value: string) {
    this.address = value;
    console.log('Address changed to:', this.address);
  }

  handleNoteChange(value: string) {
    this.note = value;
    console.log('Note changed to:', this.note);
  }

  handleEmailChange(value: string) {
    this.email = value;
    console.log('Email changed to:', this.email);
  }

  @Output() createOrder: EventEmitter<any> = new EventEmitter();

  submitForm() {
    this.createOrder.emit(this);
  }
}
