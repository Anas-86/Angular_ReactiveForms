import { FormatExpirationDateDirective } from './format-expiration-date.directive';
import { ElementRef } from '@angular/core';

describe('FormatExpirationDateDirective', () => {
  let directive: FormatExpirationDateDirective;
  let inputElement: HTMLInputElement;
  let elementRef: ElementRef;

  beforeEach(() => {
    // Create a mock input element
    inputElement = document.createElement('input');
    elementRef = new ElementRef(inputElement);
    directive = new FormatExpirationDateDirective(elementRef);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should format input value correctly', () => {
    inputElement.value = '02333'; // Simulating user input
    directive.onInput(new Event('input')); // Manually triggering input event
    expect(inputElement.value).toBe('02/33'); // Check if the directive formatted the value correctly
  });

  // Add more tests here to check various scenarios and edge cases
});
