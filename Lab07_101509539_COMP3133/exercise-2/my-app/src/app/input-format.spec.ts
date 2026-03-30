import { ElementRef } from '@angular/core';
import { InputFormatDirective } from './input-format';

describe('InputFormatDirective', () => {
  it('should create an instance', () => {
    const directive = new InputFormatDirective(null as unknown as ElementRef);
    expect(directive).toBeTruthy();
  });
});
