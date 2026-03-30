import { ElementRef } from '@angular/core';
import { InputFormat } from './input-format';

describe('InputFormatDirective', () => {
  it('should create an instance', () => {
    const directive = new InputFormat(null as unknown as ElementRef);
    expect(directive).toBeTruthy();
  });
});
