import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFormatCardNumber]'
})
export class FormatCardNumberDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    // Remove non-digit characters and existing hyphens
    let cleaned = value.replace(/\D+/g, '');

    // Limit the length to 16 digits
    cleaned = cleaned.substring(0, 16);

    // Add hyphens every 4 digits
    let formatted = '';
    for (let i = 0; i < cleaned.length; i += 4) {
      if (i > 0) {
        formatted += '-';
      }
      formatted += cleaned.substring(i, Math.min(i + 4, cleaned.length));
    }

    // Update the input element with the formatted value
    input.value = formatted;
  }
}
