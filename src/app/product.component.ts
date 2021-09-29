import { Component, Input } from '@angular/core';

@Component({
  selector: 'product',
  template: `
  <div class="media">
  <img class="mr-3" src="{{data.imageUrl}}" alt="Generic placeholder image">
  <div class="media-body">
    <h5 class="mt-0">{{data.ProductName}}</h5>
    {{data.ProductRelease}}
    <rating
    [rating] ="data.rating" 
    [numOfReviews]="data.numOfReviews"
    ></rating><br>
    {{data.description}}
  </div>
</div>
  `,
  styles: ['.media{margin-bottpm: 20px;}'],
})
export class ProductComponent {
  @Input() data;
}
