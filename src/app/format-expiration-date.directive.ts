import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFormatExpirationDate]'
})
export class FormatExpirationDateDirective {

  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // Remove all non-digits

    if(value.length==5){
      value=value.substring(0,3);
    }
    // Extract month and year parts
    let month = value.substring(0, 2);
    let year = value.substring(2, 4);

    // Validate and correct the month part
    if (month.length === 2) {
      const monthNum = parseInt(month, 10);
      if (monthNum < 1 || monthNum > 12) {
        month = '12'; // Correct invalid month to 12
      }
    }

    // Limit the year to two digits
    year = year.substring(0, 2);

    // Reconstruct the value with a slash, if the year part exists
    value = month + (year.length > 0 && month.length === 2 ? '/' + year : '');

    // Update the input value, limiting to MM/YY format
    input.value = value.substring(0, month.length + (year.length > 0 ? 3 : 0));
  }
}
