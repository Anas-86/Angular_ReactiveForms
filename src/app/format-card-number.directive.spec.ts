import { FormatCardNumberDirective } from './format-card-number.directive';
import { ElementRef } from '@angular/core';

describe('FormatCardNumberDirective', () => {
  it('should create an instance', () => {
    const mockElementRef: ElementRef = { nativeElement: document.createElement('div') };
    const directive = new FormatCardNumberDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});