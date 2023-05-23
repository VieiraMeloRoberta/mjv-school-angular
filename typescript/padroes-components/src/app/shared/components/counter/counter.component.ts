import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterComponent),
      multi: true,
    },
  ],
})
export class CounterComponent implements ControlValueAccessor {
  value = 0;

  onChange: null | ((value: number | null) => void) = null;
  onTouched: null | (() => void) = null;

  writeValue(value: number): void {
    console.log('writeValue', value);
    this.value = value;
  }

  plus(): void {
    this.value++;
    if (this.onChange) {
      console.log('onChange plus', this.value);
      this.onChange(this.value);
    }
    if (this.onTouched) {
      this.onTouched();
    }
  }

  minus(): void {
    this.value--;
    if (this.onChange) {
      console.log('onChange minus', this.value);
      this.onChange(this.value);
    }
    if (this.onTouched) {
      this.onTouched();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
