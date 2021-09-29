import { Component, Input } from '@angular/core';

@Component({
  selector: 'product',
  template: ``,
  styles: ['.media{margin-bottpm: 20px;}'],
})
export class ProductComponent {
  @Input() data;
}
